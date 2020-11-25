import React, {useState} from 'react'
import { StyleSheet, View, TextInput, Button, Text } from 'react-native'
import { login } from '../api/mock';

const LoginScreen = ({ navigation }) => {
    const [errorMessage, setErrorMessage] = useState('');
    const loginUser = () => {
        setErrorMessage('');
        login('test@test.ca', 'password')
            .then(() => {
                navigation.navigate('Accueil');
            })
            .catch((err) => setErrorMessage(err.message));
    };

    return (
        <View style={styles.container}>
            <View style={ styles.main_container }>
                <Text h1 style={ styles.h1 }>PORTAIL DNE</Text>
                <TextInput style={ styles.text_input } placeholder='Pseudo' placeholderTextColor='#fff' />
                <TextInput style={ styles.text_input } placeholder='Mot de passe' placeholderTextColor='#fff' secureTextEntry={ true } />
                <Button title="Valider" style={ styles.button } onPress={loginUser}/>
            </View>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
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
    }
})

export default LoginScreen;