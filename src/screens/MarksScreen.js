import React, { useState } from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { getSessionData, setSessionData } from "../api/session";
import { getUsernameByID } from "../api/mock";
import { getCoeffs } from '../api/api';

const MarksScreen = ({ navigation }) => {
    const [userID, setUserID] = useState('0');
    const [cyber, setCyber] = useState('');
    const [ia, setIa] = useState('');
    const [devops, setDevops] = useState('');
    const [agile, setAgile] = useState('');
    const [fonctionelle, setFonctionelle] = useState('');
    const [composant, setComposant] = useState('');
    const [ux, setUx] = useState('');
    const [aclab, setAclab] = useState('');
    const [droit, setDroit] = useState('');
    const [anglais, setAnglais] = useState('');
    const [entreprise, setEntreprise] = useState('');


    const getValue = (property) => {
        getSessionData(property).then((res) => {
            setUserID(res);
            return res;
        });
        return null;
    };

    const getCoeff = async () => {
          getCoeffs(userID).then(async (res) => {
              setCyber(res[0]);
              setIa(res[1]);
              setDevops(res[2]);
              setAgile(res[3]);
              setFonctionelle(res[4]);
              setComposant(res[5]);
              setUx(res[6]);
              setAclab(res[7]);
              setDroit(res[8]);
              setAnglais(res[9]);
              setEntreprise(res[10]);
          }).catch((err) => {});
      };

    getValue('user_id');
    getCoeff();

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={ styles.info_titles }>
                <Text style={ styles.title_content }>Cours</Text>
                <Text style={ styles.title2_content }>Coef.</Text>
                <Text style={ styles.title2_content }>Moy.</Text>
                <Text style={ styles.title2_content }>Note</Text>
            </View>
            <View style={ styles.info_marks }>
                <Text style={ styles.marks_content }>Cybersécurité</Text>
                <Text style={ styles.marks2_content }>    { cyber }</Text>
                <Text style={ styles.marks2_content }>*moy*</Text>
                <Text style={ styles.marks2_content }>*note*</Text>
            </View>
            <View style={ styles.info_marks }>
                <Text style={ styles.marks_content }>Intelligence Artificielle</Text>
                <Text style={ styles.marks2_content }>    { ia }</Text>
                <Text style={ styles.marks2_content }>*moy*</Text>
                <Text style={ styles.marks2_content }>*note*</Text>
            </View>
            <View style={ styles.info_marks }>
                <Text style={ styles.marks_content }>Devops</Text>
                <Text style={ styles.marks2_content }>    { devops }</Text>
                <Text style={ styles.marks2_content }>*moy*</Text>
                <Text style={ styles.marks2_content }>*note*</Text>
            </View>
            <View style={ styles.info_marks }>
                <Text style={ styles.marks_content }>Méthodologie Agile</Text>
                <Text style={ styles.marks2_content }>    { agile }</Text>
                <Text style={ styles.marks2_content }>*moy*</Text>
                <Text style={ styles.marks2_content }>*note*</Text>
            </View>
            <View style={ styles.info_marks }>
                <Text style={ styles.marks_content }>Programmation Fonctionelle</Text>
                <Text style={ styles.marks2_content }>    { fonctionelle }</Text>
                <Text style={ styles.marks2_content }>*moy*</Text>
                <Text style={ styles.marks2_content }>*note*</Text>
            </View>
            <View style={ styles.info_marks }>
                <Text style={ styles.marks_content }>Programmation par Composant</Text>
                <Text style={ styles.marks2_content }>    { composant }</Text>
                <Text style={ styles.marks2_content }>*moy*</Text>
                <Text style={ styles.marks2_content }>*note*</Text>
            </View>
            <View style={ styles.info_marks }>
                <Text style={ styles.marks_content }>UX</Text>
                <Text style={ styles.marks2_content }>    { ux }</Text>
                <Text style={ styles.marks2_content }>*moy*</Text>
                <Text style={ styles.marks2_content }>*note*</Text>
            </View>
            <View style={ styles.info_marks }>
                <Text style={ styles.marks_content }>Ac'Lab</Text>
                <Text style={ styles.marks2_content }>    { aclab }</Text>
                <Text style={ styles.marks2_content }>*moy*</Text>
                <Text style={ styles.marks2_content }>*note*</Text>
            </View>
            <View style={ styles.info_marks }>
                <Text style={ styles.marks_content }>Droit & Donnés</Text>
                <Text style={ styles.marks2_content }>    { droit }</Text>
                <Text style={ styles.marks2_content }>*moy*</Text>
                <Text style={ styles.marks2_content }>*note*</Text>
            </View>
            <View style={ styles.info_marks }>
                <Text style={ styles.marks_content }>Anglais</Text>
                <Text style={ styles.marks2_content }>    { anglais }</Text>
                <Text style={ styles.marks2_content }>*moy*</Text>
                <Text style={ styles.marks2_content }>*note*</Text>
            </View>
            <View style={ styles.info_marks }>
                <Text style={ styles.marks_content }>Technologie d'Entreprise</Text>
                <Text style={ styles.marks2_content }>    { entreprise }</Text>
                <Text style={ styles.marks2_content }>*moy*</Text>
                <Text style={ styles.marks2_content }>*note*</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
info_marks: {
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: 'rgba(43, 153, 206, 0.1)',
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
