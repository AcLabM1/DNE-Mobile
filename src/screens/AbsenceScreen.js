import React, {useRef, useState} from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { getSessionData, setSessionData } from "../api/session";
import {getMatiere, getUserFullName} from "../api/api";
import { getAbsences } from "../api/api";
import { getSession } from "../api/api";
import { useEffect } from "react";
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
            let sessions = [];
            for (let i = 0; i < res.length; i++) {
                getSession(res[i].idSession).then((session) => {
                    getMatiere(session.metaMatiere.idMatiere).then((matiere) => {
                        sessions.push(
                            <View style={ styles.absence } key = {i}>
                                <Text style={ styles.value }>{ Moment(session.dateHeure).format('l') }</Text>
                                <Text style={ styles.value }>
                                    { matiere.intitule }{'\n'}
                                    { session.salle }
                                </Text>
                                <Text style={ styles.value }>{ session.duree }h</Text>
                            </View>
                        );
                        setView(sessions);
                    });
                });
            }
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
        height: 45,
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
        height: 45,
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
