import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isEnable: false,
    message: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOAST_REQUEST:
            return { ...state, ...action.payload };
        case actionTypes.TOAST_FINISH:
            return { ...state, isEnable: false, message: null };
        default:
            return state;
    }
};

export default reducer;