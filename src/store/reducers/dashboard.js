import * as actionTypes from "../actions/actionTypes";

const initialState = {
    routine: null,
    events: null
};

const addRoutine = (state, action) => {
    return {
        ...state,
        routine: action.routines
    };
}

const addEvents = (state, action) => {
    return {
        ...state,
        events: action.events
    };
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ROUTINE_GET:
            return addRoutine(state, action);
        case actionTypes.EVENTS_GET:
            return addEvents(state, action);
        default:
            return state;
    }
};

export default reducer;