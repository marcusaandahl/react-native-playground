import {createStackNavigator} from 'react-navigation-stack';

// Import of Screens
import CalendarScreen from './screens/calendarScreen';

const CalendarNavigator = createStackNavigator(
    {
        Calendar: CalendarScreen,
    },
    {
        headerMode: 'none'
    }
);

export default CalendarNavigator;