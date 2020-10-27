import React from 'react'
import { StyleSheet, View, TextInput, Button, Text } from 'react-native'

class LoginForm extends React.Component {
    render() {
        return(
            <View style={ styles.main_container }>
                <Text h1 style={ styles.h1 }>PORTAIL DNE</Text>
                <TextInput style={ styles.text_input } placeholder='Pseudo' placeholderTextColor='#fff' />
                <TextInput style={ styles.text_input } placeholder='Mot de passe' placeholderTextColor='#fff' secureTextEntry={ true } />
                <Text style={ styles.button } onPress={() => {}}>Valider</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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

export default LoginForm