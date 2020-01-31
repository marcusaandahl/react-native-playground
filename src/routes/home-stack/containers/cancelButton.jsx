import React from "react";
import { Appearance } from "react-native-appearance";

export default class CancelButton extends React.Component {
	render() {
		const colorScheme = Appearance.getColorScheme();
		const themedButtonStyle =
			colorScheme === "dark"
				? cancelButtonStyles.buttonDark
				: cancelButtonStyles.buttonLight;
		const underlayColor = isDarkModeEnabled
			? HIGHLIGHT_COLOR_DARK
			: HIGHLIGHT_COLOR_LIGHT;
		return (
			<TouchableHighlight
				style={[cancelButtonStyles.button, themedButtonStyle]}
				underlayColor={underlayColor}
				onPress={onPress}
			>
				<Text style={cancelButtonStyles.text}>{label}</Text>
			</TouchableHighlight>
		);
	}
}
