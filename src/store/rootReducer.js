import { combineReducers } from 'redux';

import AuthReducer from './Auth/AuthReducer';
import LoaderReducer from './LoaderIndicator/LoaderIndicatorReducer';
import ToastReducer from './Toast/ToastReducer';
import TodoReducer from './Todo/TodoReducer';
import UserDetailsReducer from './UserDetails/UserDetailsReducer';

const reducer = combineReducers({
    auth: AuthReducer,
    loader: LoaderReducer,
    toast: ToastReducer,
    todo: TodoReducer,
    userDetails: UserDetailsReducer
});

export default reducer;