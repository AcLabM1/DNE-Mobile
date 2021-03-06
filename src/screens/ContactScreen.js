import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { getSessionData } from "../api/session";

const ContactScreen = ({ navigation }) => {
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
              <View style={ styles.contact_boxes }>
                <Text style={ styles.contact_content }>Accueil</Text>
              </View>
              <View style={ styles.info_boxes }>
                <Text style={ styles.info_content }>TEL. : 03 20 13 40 00</Text>
                <Text style={ styles.info_content }>MAIL : saio@univ-catholille.fr</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", paddingBottom: 5 }}>
              <View style={ styles.contact_boxes }>
                <Text style={ styles.contact_content }>RP</Text>
              </View>
              <View style={ styles.info_boxes }>
                <Text style={ styles.info_content }>MAIL : nicolas.gouvy@univ-catholille.fr</Text>
              </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    contact_boxes: {
        marginTop: 5,
        flexDirection: "column",
        marginLeft:10,
        marginRight: 10,
        backgroundColor: '#2b99ce',
        width: '22%',
        height: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },

    info_boxes: {
      marginTop: 5,
      flexDirection: "column",
      marginRight: 10,
      borderColor: '#2b99ce',
      borderWidth : 2,
      width: '70%',
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

export default ContactScreen;
