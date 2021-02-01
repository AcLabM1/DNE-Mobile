import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { getSessionData } from "../api/session";

const PlanningScreen = ({ navigation }) => {
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
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Données à venir..</Text>
        </View>
    );
};

const styles = StyleSheet.create({

})

export default PlanningScreen;
