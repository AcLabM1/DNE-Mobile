import React, { useState } from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { getSessionData, setSessionData } from "../api/session";
import { getUsernameByID } from "../api/mock";

const AbsenceScreen = ({ navigation }) => {
    const [userID, setUserID] = useState('0');


    const getValue = (property) => {
        getSessionData(property).then((res) => {
            setUserID(res);
            return res;
        });
        return null;
    };

    getValue('user_id');

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={ styles.headers }>
                <Text style={ styles.title }>Date</Text>
                <Text style={ styles.title }>Cours</Text>
                <Text style={ styles.title }>Durée</Text>
            </View>
            <View style={ styles.absence }>
                <Text style={ styles.value }>15/12</Text>
                <Text style={ styles.value }>
                    Cybersécurité{'\n'}
                    Salle A41
                </Text>
                <Text style={ styles.value }>4h</Text>
            </View>
            <View style={ styles.absence }>
                <Text style={ styles.value }>10/12</Text>
                <Text style={ styles.value }>
                    IA{'\n'}
                    Distanciel
                </Text>
                <Text style={ styles.value }>2h</Text>
            </View>
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
