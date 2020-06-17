// import HttpError from './HttpUtility/HttpError';
import LoaderAction from '../store/LoaderIndicator/LoaderIndicatorAction';

const ApiAction = {

    makeEffect: async (dispatch, api, params) => {
        dispatch(LoaderAction.REQUEST());

        const response = await api(...params);
        
        dispatch(LoaderAction.STOP());

        return response;
    }

};

export default ApiAction;