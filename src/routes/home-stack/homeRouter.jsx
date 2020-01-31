import { createStackNavigator } from "react-navigation-stack";

// Import of Screens
import HomeScreen from "./containers/homeScreen";

const HomeNavigator = createStackNavigator(
	{
		Home: HomeScreen
	},
	{
		headerMode: "none"
	}
);

export default HomeNavigator;
