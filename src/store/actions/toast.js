import * as actionTypes from './actionTypes';

let toastTimer = null;

export const finishToast = () => {
    return { type: actionTypes.TOAST_FINISH };
}

export const requestToast = (message) => {
    clearTimeout(toastTimer);
    return dispatch => {
        dispatch({ type: actionTypes.TOAST_REQUEST, payload: { isEnable: true, message } });
        toastTimer = setTimeout(() => dispatch(finishToast()), 7000);
    }
}

export const closeToast = () => {
    return dispatch => {
        dispatch(finishToast());
    }
}