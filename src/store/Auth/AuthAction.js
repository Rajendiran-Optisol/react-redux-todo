import { AuthReducer } from './AuthReducer';
import HttpUtil from '../../utilities/HttpUtility/HttpHandler';
import HttpError from '../../utilities/HttpUtility/HttpError';

const AuthAction = {
    isAuthenticated: ({ push }) => {
        return dispatch => {
            let token = localStorage.getItem('token');
            if (token) {
                push('/');
                return dispatch({ type: AuthReducer.AUTHENTICATE });
            }
            push('/login');
            return dispatch({ type: AuthReducer.LOGOUT });
        };
    },

    authenticate: (userName, password) => {
        return async (dispatch, getState, api) => {
            const data = { email: userName, password };
            const response = await HttpUtil.post('/login', api.AuthService, { data });
            if (response instanceof HttpError) {
                console.log(response);
                return;
            }
            
            localStorage.setItem('token', response.data.data.token);
            dispatch({ type: AuthReducer.AUTHENTICATE });
        }
    },

    logout: () => {
        return dispatch => {
            localStorage.removeItem('token');
            dispatch({ type: AuthReducer.LOGOUT });
            window.location = '/login';
        }
    }
};

export default AuthAction;