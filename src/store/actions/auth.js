import axios from '../../axios-instance';

import * as actionTypes from './actionTypes';

export const addAuth = (result) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        result: result
    }
}

export const authCheck = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await axios.post("/auth/login",
                {
                    email: email,
                    password: password,
                }
            );

            console.log(response);

            if (response.data) {
                dispatch(addAuth(response.data));
            }else {
                console.log("user not found!")
            }
        } catch (err) {
            console.log(err);
        }
    };
};