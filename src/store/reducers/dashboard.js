import * as actionTypes from "../actions/actionTypes";

const initialState = {
    routine: null,
};

const addRoutine = (state, action) => {
    return {
        ...state,
        routine: action.routines
    };
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ROUTINE_ADD:
            return addRoutine(state, action);
        default:
            return state;
    }
};

export default reducer;