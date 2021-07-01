import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isAuth: false
}


const checkAuth = (state, action) => {
    return {
        ...state,
        isAuth: true
    }
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.AUTH_SUCCESS: return checkAuth( state, action );
        default: return state;
    }
};

export default reducer;
