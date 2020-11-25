import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from "./src/screens/HomeScreen";

const AppNavigator = createStackNavigator(
    {
        Connexion: LoginScreen,
        Accueil: HomeScreen
    },
    {
      initialRouteName: 'Connexion',
    },
);

export default createAppContainer(AppNavigator);
