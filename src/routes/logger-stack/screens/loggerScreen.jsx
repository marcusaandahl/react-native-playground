import React from "react";
import { View, Text } from "react-native";

import DefaultScreen from "../../shared/defaultScreen";

class LoggerScreen extends React.Component {
	render() {
		const style = {
			container: {
				flex: 1
			},
			text: {
				color: "white",
				fontSize: 36
			}
		};
		return (
			<DefaultScreen
				child={
					<View style={style.container}>
						<Text style={style.text}>Logging Screen</Text>
					</View>
				}
			/>
		);
	}
}

export default LoggerScreen;
