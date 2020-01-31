import React from "react";
import { Text, View, Dimensions, TouchableOpacity, Button } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { scale, verticalScale } from "react-native-size-matters";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Appearance } from "react-native-appearance";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import {
	setDate,
	resetDate,
	incrementDate,
	decrementDate
} from "../../../reduxActions";
import DefaultScreen from "../../shared/defaultScreen";
import { TouchableHighlight } from "react-native-gesture-handler";

class HomeScreenContent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showDatePicker: false
		};
	}

	setDate = date => {
		date = date || this.props.selectedDate;
		this.props.setDate(date);
		this.setState({
			showDatePicker: false
		});
	};
	render() {
		const screenWidth = Dimensions.get("window").width;
		const screenWidthSubChevron = screenWidth - scale(66); //Removes 46 from 2x26 with Chevrons + 20 from 2x10 with Margins
		const style = {
			container: {
				flex: 1
			},
			text: {
				color: "white",
				fontSize: 36
			},
			datePickerContents: {
				flexDirection: "row",
				height: "auto",
				width: screenWidth,
				justifyContent: "center",
				alignItems: "center",
				alignSelf: "center"
			},
			datePickerContainer: {
				backgroundColor: "#E5E5E5",
				width: screenWidthSubChevron,
				height: 50,
				borderRadius: 15,
				justifyContent: "center",
				margin: 10
			},
			datePickerText: {
				color: "black",
				fontSize: 20,
				alignSelf: "center"
			},
			chevronColors: {
				inactive: "white",
				active: "red"
			}
		};

		const colorScheme = Appearance.getColorScheme();
		return (
			<View style={style.container}>
				<Text style={style.text}>Hello Screen</Text>
				<Text style={style.text}>Color Scheme {colorScheme}</Text>

				<View style={style.datePickerContents}>
					<FontAwesome
						name={"chevron-left"}
						size={scale(23)}
						color={style.chevronColors.inactive}
						onPress={() => this.props.decrementDate()}
					/>

					<TouchableOpacity
						onPress={() => this.setState({ showDatePicker: true })}
						style={style.datePickerContainer}
						activeOpacity={0.6}
					>
						<Text style={style.datePickerText}>
							{this.props.selectedDate.toDateString()}
						</Text>
					</TouchableOpacity>

					<DateTimePickerModal
						isVisible={this.state.showDatePicker}
						mode="date"
						date={this.props.selectedDate}
						onConfirm={this.setDate}
						onCancel={this.setDate}
						isDarkModeEnabled={colorScheme === "dark"}
						headerTextIOS={"Select a Date"}
						pickerContainerStyleIOS={{
							borderStyle: "solid",
							borderWidth: 1,
							borderColor: "white"
						}}
						titleStyle={{ text: { color: "red" } }}
					/>

					<FontAwesome
						name={"chevron-right"}
						size={scale(23)}
						color={"white"}
						onPress={() => this.props.incrementDate()}
					/>
				</View>
				<View style={style.datePickerContainer}>
					<TouchableOpacity
						style={style.datePickerContents}
						onPress={() => this.props.resetDate()}
					>
						<Text style={style.text}>TODAY</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

/*
<DateTimePicker
						value={this.props.selectedDate}
						is24Hour={true}
						mode={"spinner"}
						display="default"
						onChange={this.setDate}
					/>
					*/

// Map currentDate Redux State to Props
function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			setDate: setDate,
			resetDate: resetDate,
			incrementDate: incrementDate,
			decrementDate: decrementDate
		},
		dispatch
	);
}

// Sets the this.props.X to the set X Redux State from the Redux Store
function mapReduxStateToProps(reduxState) {
	return {
		selectedDate: reduxState.selectedDate
	};
}

// Connect setDate() and currentDate to Props with connect
const HomeScreenContentConnected = connect(
	mapReduxStateToProps,
	mapDispatchToProps
)(HomeScreenContent);

class HomeScreen extends React.Component {
	render() {
		return (
			<DefaultScreen
				//USES A SECONDARY REACT COMPONENT SO YOU DONT HAVE STATE CHANGES ON THE NAV COMPONENT
				child={<HomeScreenContentConnected />}
			/>
		);
	}
}

export default HomeScreen;
