import * as actionTypes from '../actions/actionTypes';

const initialState = {
    token: null,
    userId: null,
    category: null
}


const storeAuth = (state, action) => {
    localStorage.setItem('token', action.result.token);
    localStorage.setItem('userId', action.result.userId);
    localStorage.setItem('category', action.result.category)
    
    const remainingMilliseconds = 60 * 60 * 1000;
    const expiryDate = new Date(new Date().getTime() + remainingMilliseconds);
    localStorage.setItem("expiryDate", expiryDate.toISOString());

    return {
        ...initialState,
        token: action.result.token,
        userId: action.result.userId,
        category: action.result.category
    }
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.AUTH_SUCCESS: return storeAuth( state, action );
        default: return state;
    }
};

export default reducer;
