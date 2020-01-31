// Defines Actions taking Payload, to be used in Reducer

// GETS DATE AS INPUT AND RETURNS IT IN PAYLOAD
export function setDate(date) {
	return {
		type: "SET_DATE",
		payload: date
	};
}

export function resetDate() {
	const date = new Date();
	return {
		type: "SET_DATE",
		payload: date
	};
}

export function incrementDate() {
	return {
		type: "MATH_DATE",
		payload: { math: 1 }
	};
}

export function decrementDate() {
	return {
		type: "MATH_DATE",
		payload: { math: -1 }
	};
}
