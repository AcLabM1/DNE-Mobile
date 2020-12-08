import React, { useState } from 'react'
import { View, Text, Button } from 'react-native';
import { getSessionData, setSessionData } from "../api/session";
import { getUsernameByID } from "../api/mock";


const HomeScreen = ({ navigation }) => {
    const [userID, setUserID] = useState('0');

    const logout = async () => {
        await setSessionData('auth_token', '');
        await setSessionData('user_id', '');
        navigation.navigate('Connexion');
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
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>HomeScreen</Text>
            <Text>Bonjour {getUsernameByID(userID)}</Text>
            <Button title="Déconnexion" onPress={() => logout()} />
        </View>
    );
};

export default HomeScreen;