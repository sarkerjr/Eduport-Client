import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import authReducer from "./reducers/auth";
import dashboardReducer from "./reducers/dashboard";
import userReducer from "./reducers/user-info";

// for redux dev tools
const composeEnhancers =
    process.env.NODE_ENV === "development"
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : null || compose;

//Combining slices of state to the store
const rootReducer = combineReducers({
    auth: authReducer,
    dashboard: dashboardReducer,
    userInfo: userReducer
});

// Creating the redux store
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

// const store = createStore(
//     rootReducer,
//     applyMiddleware(thunk)
// );

export default store;