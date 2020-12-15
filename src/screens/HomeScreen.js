import React, { useState } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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
            <View style={{ flexDirection: "row", paddingBottom:50 }}>
            <View style={{paddingRight:50}}>
            <TouchableOpacity
                style={{
                    borderWidth:1,
                    borderColor:'rgba(0,0,0,0.2)',
                    alignItems:'center',
                    justifyContent:'center',
                    width:100,
                    height:100,
                    backgroundColor:'#fff',
                    borderRadius:50,
                }}>
                <Icon name={"chevron-right"}  size={30} color="#01a699" />
            </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={{
                    borderWidth:1,
                    borderColor:'rgba(0,0,0,0.2)',
                    alignItems:'center',
                    justifyContent:'center',
                    width:100,
                    height:100,
                    backgroundColor:'#fff',
                    borderRadius:50
                }}>
                <Icon name={"chevron-right"}  size={30} color="#01a699" />
            </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", paddingBottom:50 }}>
            <View style={{paddingRight:50}}>
            <TouchableOpacity
                style={{
                    borderWidth:1,
                    borderColor:'rgba(0,0,0,0.2)',
                    alignItems:'center',
                    justifyContent:'center',
                    width:100,
                    height:100,
                    backgroundColor:'#fff',
                    borderRadius:50,
                }}>
                <Icon name={"chevron-right"}  size={30} color="#01a699" />
            </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={{
                    borderWidth:1,
                    borderColor:'rgba(0,0,0,0.2)',
                    alignItems:'center',
                    justifyContent:'center',
                    width:100,
                    height:100,
                    backgroundColor:'#fff',
                    borderRadius:50
                }}>
                <Icon name={"chevron-right"}  size={30} color="#01a699" />
            </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", paddingBottom:50 }}>
            <View style={{paddingRight:50}}>
            <TouchableOpacity
                style={{
                    borderWidth:1,
                    borderColor:'rgba(0,0,0,0.2)',
                    alignItems:'center',
                    justifyContent:'center',
                    width:100,
                    height:100,
                    backgroundColor:'#fff',
                    borderRadius:50,
                }}>
                <Icon name={"chevron-right"}  size={30} color="#01a699" />
            </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={{
                    borderWidth:1,
                    borderColor:'rgba(0,0,0,0.2)',
                    alignItems:'center',
                    justifyContent:'center',
                    width:100,
                    height:100,
                    backgroundColor:'#fff',
                    borderRadius:50
                }}>
                <Icon name={"chevron-right"}  size={30} color="#01a699" />
            </TouchableOpacity>
            </View>
            
        </View>
    );
};

export default HomeScreen;