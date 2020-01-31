import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

import homeStackReducer from "./routes/home-stack/homeStackReducer";

// REDUCERS
const reducers = combineReducers({
	selectedDate: homeStackReducer
});

// MIDDLEWARES
const logger = createLogger({});

// COMBINES MIDDLEWARES
// redux promise not added
const middlewares = applyMiddleware(logger);

// EXPORTS CREATING REDUXSTORE
const reduxStore = createStore(reducers, {}, middlewares);

export default reduxStore;
