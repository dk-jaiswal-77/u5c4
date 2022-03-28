import { combineReducers, createStore } from "redux";
import { loginReducer } from "./Login/loginReducer";
import { meetupReducer } from "./meetup/meetupReducer";

const rootReducer = combineReducers({
    user : loginReducer,
    meetup : meetupReducer
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); 

