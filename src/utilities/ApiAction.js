// import HttpError from './HttpUtility/HttpError';
import LoaderAction from '../store/LoaderIndicator/LoaderIndicatorAction';

const ApiAction = {

    makeEffect: async (dispatch, api, params) => {
        dispatch(LoaderAction.REQUEST());
        // await new Promise(resolve => setTimeout(() => resolve(true), 3000));

        const response = await api(...params);
        
        dispatch(LoaderAction.STOP());

        return response;
    }

};

export default ApiAction;