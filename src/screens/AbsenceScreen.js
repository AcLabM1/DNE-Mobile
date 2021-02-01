import React, { useRef, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { getSessionData } from "../api/session";
import { getMatiere } from "../api/api";
import { getAbsences } from "../api/api";
import { getSession } from "../api/api";
import Moment from 'moment';

const AbsenceScreen = ({ navigation }) => {
    const [userID, setUserID] = useState('0');
    const [view, setView] = useState([]);
    const done = useRef(false);

    const getUserID = async () => {
        return getSessionData('user_id');
    };

    const getAllAbsences = async (user_id) => {
        getAbsences(user_id).then((res) => {
            let promises = [];
            // On récupère la session pour chaque absence
            for (let i = 0; i < res.length; i++) {
                let id_session = res[i].idSession;
                // On ajoute la requête à un tableau de promesses
                promises.push(getSession(id_session));
            }
            Promise.all(promises).then((res) => {
                let promises2 = [];
                // On récupère la matiere pour chaque absence
                for (let i = 0; i < res.length; i++) {
                    let session = res[i];
                    let id_matiere = session.metaMatiere.idMatiere;
                    // On ajoute la requête à un tableau de promesses
                    promises2.push(getMatiere(id_matiere));
                }
                Promise.all(promises2).then((result) => {
                    let display = [];
                    for (let i = 0; i < result.length; i++) {
                        display.push(
                            <View style={ styles.absence } key = {i}>
                                <Text style={ styles.value }>{ Moment(res[i].dateHeure).format('l') }</Text>
                                <Text style={ styles.value }>
                                    { result[i].intitule }{'\n'}
                                    { res[i].salle }
                                </Text>
                                <Text style={ styles.value }>{ res[i].duree }h</Text>
                            </View>
                        );
                    }
                    setView(display);
                })
            });
        }).catch((err) => {});
    };

    if (!done.current) {
        getUserID().then((res) => {
            setUserID(res);
            getAllAbsences(res);
        });
        done.current = true;
    }


    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={ styles.headers }>
                <Text style={ styles.title }>Date</Text>
                <Text style={ styles.title }>Cours</Text>
                <Text style={ styles.title }>Durée</Text>
            </View>
            { view }
        </View>
    );
};

const styles = StyleSheet.create({
    headers: {
        marginTop: 10,
        flexDirection: 'row',
        backgroundColor: '#2b99ce',
        width: '90%',
        height: 50,
        alignItems: 'center',
        fontSize: 5
    },
    title: {
        color: '#ffffff',
        width: '40%',
        paddingLeft: 10
    },
    absence: {
        flexDirection: 'row',
        backgroundColor: 'rgba(43, 153, 206, 0.1)',
        width: '90%',
        height: 80,
        alignItems: 'center',
        fontSize: 5,
        borderColor: '#2b99ce',
        borderBottomWidth: 1
    },
    value: {
        color: '#000',
        width: '40%',
        paddingLeft: 10
    }
})

export default AbsenceScreen;
