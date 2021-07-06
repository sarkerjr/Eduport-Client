import axios from "../../axios-instance";

import * as actionTypes from "./actionTypes";

export const addAuth = (result) => {
    //If there is a previous expiryDate stored, then bypass this part.
    if(!localStorage.getItem("expiryDate")){
        localStorage.setItem("token", result.token);
        localStorage.setItem("userId", result.userId);
        localStorage.setItem("category", result.category);
    
        //Setting a expiry date for the token
        const remainingMilliseconds = 60 * 60 * 1000; //For an hour
        const expiryDate = new Date(new Date().getTime() + remainingMilliseconds);
        localStorage.setItem("expiryDate", expiryDate.toISOString());
    }
    return {
        type: actionTypes.AUTH_SUCCESS,
        result: result,
    };
};

export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("category");
    localStorage.removeItem("expiryDate");
    return {
        type: actionTypes.AUTH_LOGOUT,
    };
};

//Check validity while login
export const authCheck = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await axios.post("/auth/login", {
                email: email,
                password: password,
            });

            if (response.data) {
                dispatch(addAuth(response.data));
            } else {
                console.log("user not found!");
            }
        } catch (err) {
            console.log(err);
        }
    };
};

//check if stored token time is expired
export const authCheckState = () => {
    return (dispatch) => {
        const token = localStorage.getItem("token");
        if (!token) dispatch(logout());
        else {
            const expirationDate = new Date(localStorage.getItem("expiryDate"));
            if (expirationDate <= new Date()) dispatch(logout());
            else {
                const userId = localStorage.getItem("userId");
                const category = localStorage.getItem("category");
                dispatch(
                    addAuth({ token: token, userId: userId, category: category })
                );
            }
        }
    };
};
