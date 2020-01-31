import {createBottomTabNavigator} from 'react-navigation-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Text} from 'react-native';
import React from 'react';
import {scale, verticalScale} from 'react-native-size-matters';

// Import of Navigators
import HomeNavigator from './home-stack/homeRouter';
import CalendarNavigator from './calendar-stack/calendarRouter';
import LoggerNavigator from './logger-stack/loggerRouter';
import SettingsNavigator from './settings-stack/settingsRouter';

const MainNavigator = createBottomTabNavigator(
    {
        Home: HomeNavigator,
        Calendar: CalendarNavigator,
        Logger: LoggerNavigator,
        Settings: SettingsNavigator
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                switch (routeName){
                    case 'Home':
                        iconName = 'book';
                        break;
                    case 'Calendar':
                        iconName = 'calendar';
                        break;
                    case 'Logger':
                        iconName = 'pencil';
                        break;
                    case 'Settings':
                        iconName = 'gear';
                        break;
                }        
                // You can return any component that you like here!
                return <FontAwesome name={iconName} size={scale(23)} color={tintColor} />;
            },
            tabBarLabel: ({ focused, tintColor}) => {
                const { routeName } = navigation.state;
                let title;
                switch (routeName){
                    case 'Home':
                        title = 'Home';
                        break;
                    case 'Calendar':
                        title = 'Calendar';
                        break;
                    case 'Logger':
                        title = 'Log';
                        break;
                    case 'Settings':
                        title = 'Settings';
                        break;
                }
                const style = {color: tintColor, textAlign: 'center'};
                return <Text style={style}>{title}</Text>
            },
            tabBarOptions: {
              activeTintColor: 'red',
              inactiveTintColor: 'rgba(255,255,255,0.8)',
              style: {
                backgroundColor: '#151522',
                borderTopColor: 'rgba(255,255,255,0.6)',
                borderTopWidth: 1,
                height: verticalScale(50)
              },
            },
            
        })
    }
);

export default MainNavigator;