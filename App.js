import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from "./src/screens/HomeScreen";
import PlanningScreen from "./src/screens/PlanningScreen";
import AbsenceScreen from "./src/screens/AbsenceScreen";
import MarksScreen from "./src/screens/MarksScreen";
import InfoScreen from "./src/screens/InfoScreen";
import ServicesScreen from "./src/screens/ServicesScreen";
import ContactScreen from './src/screens/ContactScreen';

const AppNavigator = createStackNavigator(
    {
        Connexion: LoginScreen,
        Accueil: HomeScreen,
        Planning : PlanningScreen,
        Absences : AbsenceScreen,
        Notes : MarksScreen,
        Informations : InfoScreen,
        Services : ServicesScreen,
        Contacts : ContactScreen
    },
    {
      initialRouteName: 'Connexion',
    },
);

export default createAppContainer(AppNavigator);
