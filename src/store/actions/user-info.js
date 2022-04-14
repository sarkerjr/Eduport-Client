import axios from "../../util/axios";

import * as actionTypes from "./actionTypes";

//add routine to state
export const getUserInfo = () => {
    return async (dispatch) => {
        try {
            const userInfo = await axios.get("/student/profile/details");

            if(userInfo.data) {
                dispatch({
                    type: actionTypes.USER_INFO_GET,
                    userInfo: userInfo.data,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
};