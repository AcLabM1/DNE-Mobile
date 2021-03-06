import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Text } from 'react-native'
import { login } from '../api/api';
import { setSessionData} from "../api/session";

const LoginScreen = ({ navigation }) => {
        const [errorMessage, setErrorMessage] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');


    const loginUser = async () => {
        setErrorMessage('');

            login(email, password)
            .then(async (res) => {
                if (res.user_id === undefined || res.user_id === 0) {
                    setErrorMessage('Les identifiants sont invalides.');
                }
                else {
                    await setSessionData('auth_token', res.auth_token);
                    await setSessionData('user_id', res.user_id.toString());
                    navigation.navigate('Accueil');
                }
            })
            .catch((err) => setErrorMessage(err.message));
    };

    return (
        <View style={styles.container}>
            <View style={ styles.main_container }>
                <Text h1 style={ styles.h1 }>PORTAIL DNE</Text>
                {errorMessage ? <Text style={ styles.errormsg }>/!\ {errorMessage}</Text> : null}
                <TextInput
                    style={ styles.text_input }
                    placeholder='Adresse mail'
                    placeholderTextColor='#fff'
                    onChangeText={email => setEmail(email)}
                />
                <TextInput
                    style={ styles.text_input }
                    placeholder='Mot de passe'
                    placeholderTextColor='#fff'
                    onChangeText={password => setPassword(password)}
                    secureTextEntry={ true }
                />
                <Text style={ styles.button } onPress={() => loginUser()}>Valider</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#2b99ce'
    },
    main_container: {
        marginTop: 50,
        flex: 1,
        justifyContent: 'center'
    },
    text_input: {
        marginTop: 5,
        marginBottom: 20,
        height: 50,
        padding: 10,
        borderBottomWidth: 1,
        borderRadius: 5,
        borderColor: '#fff',
        color: '#fff'
    },
    label: {
        fontSize: 16,
        color: '#fff'
    },
    h1: {
        fontSize: 20,
        marginBottom: 50,
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: '#fff',
        color: '#7eb9cb',
        padding: 10,
        textAlign: 'center',
        borderRadius: 5,
        fontSize: 16,
        fontWeight: 'bold'
    },
    errormsg: {
        color: '#FF6053',
        fontWeight: 'bold'
    }
})

export default LoginScreen;