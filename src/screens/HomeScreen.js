import React, { useState } from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { getSessionData, setSessionData } from "../api/session";
import { getUsernameByID } from "../api/mock";


const HomeScreen = ({ navigation }) => {
    const [userID, setUserID] = useState('0');

    const logout = async () => {
        await setSessionData('auth_token', '');
        await setSessionData('user_id', '');
        navigation.navigate('Connexion');
    };

    const gotoPlanning = async () => {
        navigation.navigate('Planning');
    };

    const gotoAbsence = async () => {
        navigation.navigate('Absences');
    };

    const gotoMarks = async () => {
        navigation.navigate('Notes');
    };

    const gotoInfo = async () => {
        navigation.navigate('Informations');
    };

    const gotoServices = async () => {
        navigation.navigate('Services');
    };

    const gotoContact = async () => {
        navigation.navigate('Contacts');
    };

    const getValue = (property) => {
        getSessionData(property).then((res) => {
            setUserID(res);
            return res;
        });
        return null;
    };

    getValue('user_id');

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
            <View style={{left:120, paddingBottom:10}}>
            <Button title="Déconnexion" onPress={() => logout()} />
            </View>
            <View style={{ flexDirection: "row", paddingBottom:50 }}>
                <View style={{paddingRight:50}}>
                    <TouchableOpacity style={styles.circle_button} onPress={() => gotoPlanning()}>
                        <MaterialIcons name={"schedule"}  size={60} color="#01a699" />
                    </TouchableOpacity>
                    <Text style={{left:23}}>Planning</Text>
                </View>
                <View style={{flexDirection: "column"}}>
                    <TouchableOpacity style={styles.circle_button} onPress={() => gotoAbsence()}>
                        <AntDesign name={"question"}  size={60} color="#01a699" />
                    </TouchableOpacity>
                    <Text style={{left:18}}> Absences</Text>
                </View>
            </View>
            <View style={{ flexDirection: "row", paddingBottom:50 }}>
                <View style={{paddingRight:50}}>
                    <TouchableOpacity style={styles.circle_button} onPress={() => gotoMarks()}>
                        <Foundation name={"clipboard-notes"}  size={60} color="#01a699" />
                    </TouchableOpacity>
                    <Text style={{left:30}}>Notes</Text>
                </View>
                <View style={{flexDirection: "column"}}>
                    <TouchableOpacity style={styles.circle_button} onPress={() => gotoInfo()}>
                        <Feather name={"info"}  size={60} color="#01a699" />
                    </TouchableOpacity>
                    <Text style={{left:14}}>Informations</Text>
                </View>
            </View>
            <View style={{ flexDirection: "row", paddingBottom:50 }}>
                <View style={{paddingRight:50}}>
                    <TouchableOpacity style={styles.circle_button} onPress={() => gotoServices()}>
                        <AntDesign name={"customerservice"}  size={60} color="#01a699" />
                    </TouchableOpacity>
                    <Text style={{left:23}}>Services</Text>
                </View>
                <View style={{flexDirection: "column"}}>
                    <TouchableOpacity style={styles.circle_button} onPress={() => gotoContact()}>
                        <AntDesign name={"contacts"}  size={60} color="#01a699" />
                    </TouchableOpacity>
                    <Text style={{left:23}}>Contacts</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    circle_button: {
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        backgroundColor:'#fff',
        borderRadius:50
    }
})

export default HomeScreen;
