import {createStackNavigator} from 'react-navigation-stack';

// Import of Screens
import SettingsScreen from './screens/settingsScreen';

const SettingsNavigator = createStackNavigator(
    {
        Settings: SettingsScreen,
    },
    {
        headerMode: 'none'
    }
);

export default SettingsNavigator;