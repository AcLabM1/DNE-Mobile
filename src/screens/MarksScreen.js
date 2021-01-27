import React, { useRef, useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { getSessionData } from "../api/session";
import { getMarks, getMatiere } from '../api/api';

const MarksScreen = ({ navigation }) => {
    const [userID, setUserID] = useState('0');
    const [view, setView] = useState([]);
    const done = useRef(false);


    const getUserID = async () => {
        return getSessionData('user_id');
    };

    const getAllMarks = async (user_id) => {
        // Récupération des notes de l'utilisateur
        getMarks(user_id).then((marks) => {
            let promises = [];
            // On récupère la matière pour chaque note
            for (let i = 0; i < marks.length; i++) {
                let id_matiere = marks[i].metaMatiere.idMatiere;
                // On ajoute la requête à un tableau de promesses
                promises.push(getMatiere(id_matiere));
            }
            // On traîte chaque retour de requête
            Promise.all(promises).then((res) => {
                let display = [];
                for (let i = 0; i < res.length; i++) {
                    let matiere = res[i];
                    display.push(
                        <View style={ styles.info_marks } key={{i}}>
                            <Text style={ styles.marks_content }>{ matiere.intitule }</Text>
                            <Text style={ styles.marks_content }>{ marks[i].coef }</Text>
                            <Text style={ styles.marks_content }>{ marks[i].note }</Text>
                        </View>
                    );
                }
                setView(display);
            });
        });
    };

    if (!done.current) {
        getUserID().then((res) => {
            setUserID(res);
            getAllMarks(res);
        });
        done.current = true;
    }

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <ScrollView>
                <View style={ styles.info_titles }>
                    <Text style={ styles.title_content }>Matière</Text>
                    <Text style={ styles.title_content }>Coef.</Text>
                    <Text style={ styles.title_content }>Note</Text>
                </View>
                { view }
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    info_titles: {
        marginTop: 10,
        flexDirection: 'row',
        backgroundColor: '#2b99ce',
        width: '100%',
        height: 50,
        alignItems: 'center',
        fontSize: 5
    },

    title_content:{
        color: '#ffffff',
        width: '30%',
        paddingLeft: 10
    },

    info_marks: {
        marginTop: 10,
        flexDirection: 'row',
        backgroundColor: 'rgba(43, 153, 206, 0.1)',
        width: '100%',
        height: 80,
        alignItems: 'center',
        fontSize: 5
    },

    marks_content: {
      color: 'grey',
      width: '30%',
      paddingLeft: 10
    }
})

export default MarksScreen;
