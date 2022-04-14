import * as actionTypes from "../actions/actionTypes";

const initialState = {
    user: null,
};

const addUserInfo = (state, action) => {
    return {
        ...state,
        user: action.userInfo
    };
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_INFO_GET:
            return addUserInfo(state, action);
        default:
            return state;
    }
};

export default reducer;