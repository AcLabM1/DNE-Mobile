import React, { useState } from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { getSessionData, setSessionData } from "../api/session";

const ServicesScreen = ({ navigation }) => {
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
            <View style={{flexDirection: "row", paddingBottom:5}}>
              <View style={styles.service_boxes}>
                <Text style={styles.content_title}>Accueil</Text>
                <Text style={styles.content_info}>60 Boulevard Vauban</Text>
              </View>
              <View style={styles.service_boxes}>
                <Text style={styles.content_title}>BU</Text>
                <Text style={styles.content_info}>60 rue du port</Text>
              </View>
            </View>
            <View style={{flexDirection: "row", paddingBottom:5}}>
              <View style={styles.service_boxes}>
                <Text style={styles.content_title}>Restaurant</Text>
                <Text style={styles.content_info}>47 Boulevard Vauban</Text>
              </View>
              <View style={styles.service_boxes}>
                <Text style={styles.content_title}>Résidence</Text>
                <Text style={styles.content_info}>47 Boulevard Vauban</Text>
              </View>
            </View>
          </View>
    );
};

const styles = StyleSheet.create({
    service_boxes: {
        marginTop: 5,
        flexDirection: "column",
        marginLeft:5,
        marginRight: 5,
        backgroundColor: 'rgba(175, 231, 250, 0.9)',
        height: 100,
        width : '47%',
        justifyContent: 'center'
    },

    content_title: {
      color: '#076585',
      marginBottom : 15,
      paddingLeft : 15,
      fontWeight: 'bold'
    },

    content_info: {
      color: '#076585',
      fontSize: 10,
      paddingLeft : 15
    }
})

export default ServicesScreen;
