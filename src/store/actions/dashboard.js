import axios from "../../util/axios";

import * as actionTypes from "./actionTypes";

//add routine to state
export const addRoutine = () => {
    return async (dispatch) => {
        try {
            const routines = await axios.get("/routine/get", {
                params: {
                    semester: 2,
                    year: 3,
                },
            });

            if(routines.data) {
                dispatch({
                    type: actionTypes.ROUTINE_ADD,
                    routines: routines.data.routines,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
};
