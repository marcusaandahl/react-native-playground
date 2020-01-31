import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import MainNavigator from "./src/routes/mainRouter";
import { Provider } from "react-redux";

import reduxStore from "./src/reduxStore";

// Add provider with the Redux Store, {options}, Middleware
class App extends Component {
	render() {
		return (
			<Provider store={reduxStore}>
				<AppContainer />
			</Provider>
		);
	}
}

const AppContainer = createAppContainer(MainNavigator);

export default App;
