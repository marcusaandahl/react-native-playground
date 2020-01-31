import React from "react";
import { View } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

class DefaultScreen extends React.Component {
	constructor(props) {
		super(props);
		this.child = this.props.child;
	}

	render() {
		const style = {
			container: {
				backgroundColor: "#151522",
				flex: 1
			},
			statusBar: {
				width: "100%",
				height: getStatusBarHeight(),
				backgroundColor: "white"
			}
		};
		return (
			<View style={style.container}>
				<View style={style.statusBar} />
				{this.child}
			</View>
		);
	}
}

export default DefaultScreen;
