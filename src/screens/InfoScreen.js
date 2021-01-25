import React, { useState } from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { getSessionData, setSessionData } from "../api/session";
import { getUsernameByID } from "../api/mock";

const InfoScreen = ({ navigation }) => {
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
        <View>
            <View style={{ flexDirection: "row", paddingBottom: 5 }}>
              <View style={ styles.info_titles }>
                <Text style={ styles.contact_content }>NOM</Text>
              </View>
              <View style={ styles.info_boxes }>
                <Text style={ styles.info_content }>*requete API*</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", paddingBottom: 5 }}>
              <View style={ styles.info_titles }>
                <Text style={ styles.contact_content }>PRENOM</Text>
              </View>
              <View style={ styles.info_boxes }>
                <Text style={ styles.info_content }>*requete API*</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", paddingBottom: 5 }}>
              <View style={ styles.info_titles }>
                <Text style={ styles.contact_content }>DATE DE{"\n"}NAISSANCE</Text>
              </View>
              <View style={ styles.info_boxes }>
                <Text style={ styles.info_content }>*requete API*</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", paddingBottom: 5 }}>
              <View style={ styles.info_titles }>
                <Text style={ styles.contact_content }>TELEPHONE</Text>
              </View>
              <View style={ styles.info_boxes }>
                <Text style={ styles.info_content }>*requete API*</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", paddingBottom: 5 }}>
              <View style={ styles.info_titles }>
                <Text style={ styles.contact_content }>EMAIL{"\n"}PERSONNEL</Text>
              </View>
              <View style={ styles.info_boxes }>
                <Text style={ styles.info_content }>*requete API*</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", paddingBottom: 5 }}>
              <View style={ styles.info_titles }>
                <Text style={ styles.contact_content }>EMAIL{"\n"}UNIVERSITE</Text>
              </View>
              <View style={ styles.info_boxes }>
                <Text style={ styles.info_content }>*requete API*</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", paddingBottom: 5 }}>
              <View style={ styles.info_titles }>
                <Text style={ styles.contact_content }>STATUT</Text>
              </View>
              <View style={ styles.info_boxes }>
                <Text style={ styles.info_content }>*requete API*</Text>
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
