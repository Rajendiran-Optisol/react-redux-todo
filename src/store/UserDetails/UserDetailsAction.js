import { UserDetailReducer } from './UserDetailsReducer';
import HttpUtil from '../../utilities/HttpUtility/HttpHandler';
import HttpError from '../../utilities/HttpUtility/HttpError';
import { AuthService } from '../../utilities/HttpUtility/ServiceInstance/';
import ApiAction from '../../utilities/ApiAction';

const UserDetailActions = {
    fetchUserDetails: () => {
        return async dispatch => {
            const url = '/me';
            const response = await ApiAction.makeEffect(dispatch, HttpUtil.get, [url, AuthService]);

            if (response instanceof HttpError)
                return;

            dispatch({ type: UserDetailReducer.FETCH_USER_DETAILS, payload: response.data.data });
        }
    },

    resetUserDetails: () => {
        return dispatch => {
            dispatch({ type: UserDetailReducer.RESET_USER_DETAILS });
        }
    }
};

export default UserDetailActions;