import React, { useState } from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { getSessionData, setSessionData } from "../api/session";
import { getUsernameByID } from "../api/mock";
import { getUserInfo } from '../api/api';
import Moment from 'moment';

const InfoScreen = ({ navigation }) => {
    const [userID, setUserID] = useState('0');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [date_of_birth, setDateofBirth] = useState('');
    const [mail_perso, setMailPerso] = useState('');
    const [phone, setPhone] = useState('');
    const [mail_univ, setMailUniv] = useState('');

    Moment.locale('fr');


    const getValue = (property) => {
        getSessionData(property).then((res) => {
            setUserID(res);
            return res;
        });
        return null;
    };

  const getInfo = async () => {
        getUserInfo(userID).then(async (res) => {
            setFirstName(res[0]);
            setLastName(res[1]);
            setDateofBirth(res[2]);
            setMailPerso(res[3]);
            setPhone(res[4]);
            setMailUniv(res[5]);
        }).catch((err) => {});
    };

    getValue('user_id');
    getInfo();

    return (
        <View>
            <View style={{ flexDirection: "row", paddingBottom: 5 }}>
              <View style={ styles.info_titles }>
                <Text style={ styles.contact_content }>NOM</Text>
              </View>
              <View style={ styles.info_boxes }>
                <Text style={ styles.info_content }>{ last_name }</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", paddingBottom: 5 }}>
              <View style={ styles.info_titles }>
                <Text style={ styles.contact_content }>PRENOM</Text>
              </View>
              <View style={ styles.info_boxes }>
                <Text style={ styles.info_content }>{ first_name }</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", paddingBottom: 5 }}>
              <View style={ styles.info_titles }>
                <Text style={ styles.contact_content }>DATE DE{"\n"}NAISSANCE</Text>
              </View>
              <View style={ styles.info_boxes }>
                <Text style={ styles.info_content }>{Moment(date_of_birth).format('d MMMM yyyy')}</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", paddingBottom: 5 }}>
              <View style={ styles.info_titles }>
                <Text style={ styles.contact_content }>TELEPHONE</Text>
              </View>
              <View style={ styles.info_boxes }>
                <Text style={ styles.info_content }>{ phone }</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", paddingBottom: 5 }}>
              <View style={ styles.info_titles }>
                <Text style={ styles.contact_content }>EMAIL{"\n"}PERSONNEL</Text>
              </View>
              <View style={ styles.info_boxes }>
                <Text style={ styles.info_content }>{ mail_perso }</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", paddingBottom: 5 }}>
              <View style={ styles.info_titles }>
                <Text style={ styles.contact_content }>EMAIL{"\n"}UNIVERSITE</Text>
              </View>
              <View style={ styles.info_boxes }>
                <Text style={ styles.info_content }>{ mail_univ }</Text>
              </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    info_titles: {
        marginTop: 5,
        flexDirection: "column",
        marginLeft: 10,
        backgroundColor: '#2b99ce',
        width: '30%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },

    info_boxes: {
      marginTop: 5,
      flexDirection: "column",
      marginRight: 10,
      borderColor: '#2b99ce',
      borderWidth : 1,
      width: '65%',
      alignItems: 'center',
      justifyContent: 'center'
    },

    info_content: {
      color: '#2b99ce'
    },

    contact_content: {
      color: '#ffffff'
    }
})


export default InfoScreen;
