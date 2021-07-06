import * as actionTypes from "../actions/actionTypes";

const initialState = {
    isAuth: false,
    token: null,
    userId: null,
    category: null,
};

const storeAuth = (state, action) => {
    return {
        ...state,
        isAuth: true,
        token: action.result.token,
        userId: action.result.userId,
        category: action.result.category,
    };
};

const removeAuth = (state) => {
    return {
        ...state,
        isAuth: false,
        token: null,
        userId: null,
        category: null,
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_SUCCESS:
            return storeAuth(state, action);
        case actionTypes.AUTH_LOGOUT:
            return removeAuth(state);
        default:
            return state;
    }
};

export default reducer;
