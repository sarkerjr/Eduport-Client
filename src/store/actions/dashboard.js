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

            if (routines.data) {
                dispatch({
                    type: actionTypes.ROUTINE_GET,
                    routines: routines.data.routines,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
};

// Adding events to state
export const addEvents = () => {
    return async (dispatch) => {
        try {
            const events = await axios.get("/event/get");
            if (events.data) {
                dispatch({
                    type: actionTypes.EVENTS_GET,
                    events: events.data.events,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
};
