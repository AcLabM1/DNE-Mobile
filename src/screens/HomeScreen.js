import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>HomeScreen</Text>
            <Button title="Déconnexion" onPress={() => navigation.navigate('Connexion')} />
        </View>
    );
};

export default HomeScreen;