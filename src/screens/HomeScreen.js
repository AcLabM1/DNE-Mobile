import React from 'react';
import { View, Text, Button } from 'react-native';
import {getSessionData, setSessionData} from "../api/session";

const HomeScreen = ({ navigation }) => {
    const logout = async () => {
        await setSessionData('auth_token', '');
        await setSessionData('user_id', '');
        console.log(getSessionData('auth_token'));
        console.log(getSessionData('user_id'));
        navigation.navigate('Login');
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>HomeScreen</Text>
            <Button title="Déconnexion" onPress={() => logout()} />
        </View>
    );
};

export default HomeScreen;