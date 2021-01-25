import AsyncStorage from '@react-native-community/async-storage';

export const getSessionData = async (property) => {
    try {
        const value = await AsyncStorage.getItem('@' + property);
        if (value !== null) {
            return value;
        }
    } catch (e) {
        console.log('error : ' + e);
    }
};

export const setSessionData = async (property, value) => {
    try {
        await AsyncStorage.setItem('@' + property, value);
    } catch (e) {
        return null;
    }
};