import React, { useState } from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { getSessionData, setSessionData } from "../api/session";
import { getUsernameByID } from "../api/mock";

const MarksScreen = ({ navigation }) => {
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
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.info_titles}>
                <Text style={styles.title_content}>Cours</Text>
                <Text style={styles.title2_content}>Coef.</Text>
                <Text style={styles.title2_content}>Moy.</Text>
                <Text style={styles.title2_content}>Note</Text>
            </View>
            <View style={styles.info_marks}>
                <Text style={styles.marks_content}>Anglais</Text>
                <Text style={styles.marks2_content}>*coef*</Text>
                <Text style={styles.marks2_content}>*moy*</Text>
                <Text style={styles.marks2_content}>*note*</Text>
            </View>
            <View style={styles.info_marks}>
                <Text style={styles.marks_content}>Programmation par Composant</Text>
                <Text style={styles.marks2_content}>*coef*</Text>
                <Text style={styles.marks2_content}>*moy*</Text>
                <Text style={styles.marks2_content}>*note*</Text>
            </View>
            <View style={styles.info_marks}>
                <Text style={styles.marks_content}>Programmation fonctionelle</Text>
                <Text style={styles.marks2_content}>*coef*</Text>
                <Text style={styles.marks2_content}>*moy*</Text>
                <Text style={styles.marks2_content}>*note*</Text>
            </View>
            <View style={styles.info_marks}>
                <Text style={styles.marks_content}>Cybersécurité</Text>
                <Text style={styles.marks2_content}>*coef*</Text>
                <Text style={styles.marks2_content}>*moy*</Text>
                <Text style={styles.marks2_content}>*note*</Text>
            </View>
            <View style={styles.info_marks}>
                <Text style={styles.marks_content}>IA</Text>
                <Text style={styles.marks2_content}>*coef*</Text>
                <Text style={styles.marks2_content}>*moy*</Text>
                <Text style={styles.marks2_content}>*note*</Text>
            </View>
            <View style={styles.info_marks}>
                <Text style={styles.marks_content}>Droit & Données</Text>
                <Text style={styles.marks2_content}>*coef*</Text>
                <Text style={styles.marks2_content}>*moy*</Text>
                <Text style={styles.marks2_content}>*note*</Text>
            </View>
            <View style={styles.info_marks}>
                <Text style={styles.marks_content}>Ac'Lab</Text>
                <Text style={styles.marks2_content}>*coef*</Text>
                <Text style={styles.marks2_content}>*moy*</Text>
                <Text style={styles.marks2_content}>*note*</Text>
            </View>
        </View>
);
};

const styles = StyleSheet.create({
info_marks: {
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: 'rgba(43,153,206,0.2)',
    width: '90%',
    height: 45,
    alignItems: 'center',
    fontSize: 5
},

info_titles: {
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: '#2b99ce',
    width: '90%',
    height: 45,
    alignItems: 'center',
    fontSize: 5
},

title_content:{
    color: '#ffffff',
    width: '40%',
    paddingLeft: 10
},

title2_content:{
    color: '#ffffff',
    width: '20%',
    paddingLeft: 10
},

marks_content: {
  color: 'grey',
  width: '40%',
  paddingLeft: 10
},

marks2_content: {
    color: 'grey',
    width: '20%',
    paddingLeft: 10
  }
})

export default MarksScreen;
