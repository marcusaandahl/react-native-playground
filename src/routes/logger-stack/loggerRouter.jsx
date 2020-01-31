import {createStackNavigator} from 'react-navigation-stack';

// Import of Screens
import LoggerScreen from './screens/loggerScreen';

const LoggerNavigator = createStackNavigator(
    {
        Logger: LoggerScreen,
    },
    {
        headerMode: 'none'
    }
);

export default LoggerNavigator;