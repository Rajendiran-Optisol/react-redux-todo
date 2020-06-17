import { LoaderReducer } from './LoaderIndicatorReducer';

const LoaderIndicatorAction = {
    REQUEST: () => ({ type: LoaderReducer.REQUEST_LOADING }),
    STOP: () => ({ type: LoaderReducer.STOP_LOADING }),
    
    initLoader: () => {
        return dispatch => {
            dispatch(LoaderIndicatorAction.REQUEST())
        }
    },

    stopLoader: () => {
        return dispatch => {
            dispatch(LoaderIndicatorAction.STOP());
        }
    }
};

export default Object.freeze(LoaderIndicatorAction);