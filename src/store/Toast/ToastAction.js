import { ToastReducer } from './ToastReducer';

let toastTimer = null;

const ToastAction = {

    finishToast: () => {
        return { type: ToastReducer.TOAST_FINISH };
    },

    requestToast: ({ message, color }) => {
        clearTimeout(toastTimer);
        
        return dispatch => {
            dispatch({ type: ToastReducer.TOAST_REQUEST, payload: { isEnable: true, message, color } });
            toastTimer = setTimeout(() => dispatch(ToastAction.finishToast()), 7000);
        }
    },

    closeToast: () => {
        return dispatch => {
            dispatch(ToastAction.finishToast());
        }
    }

};

export default Object.freeze(ToastAction);