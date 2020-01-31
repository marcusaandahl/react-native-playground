// Create Reducer for Home handling Payload to be update to the Redux Store

// setDate(type payload) => returns action.payload being the new date

export default homeStackReducer = (state, action) => {
	if (state === undefined) {
		const date = new Date();
		return date;
	}
	// TODO: handle actions
	switch (action.type) {
		case "SET_DATE":
			console.log("sets date state and returns payload");
			return action.payload;
		case "MATH_DATE":
			console.log("ADD math to date state and returns payload");
			const newDate = new Date();
			newDate.setTime(state.getTime() + 864e5 * action.payload.math);
			console.log(newDate.toDateString());
			return newDate;
		default:
			console.log("sets with default state:");
			console.log(state);
			return state;
	}
};
