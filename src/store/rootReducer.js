import { combineReducers } from 'redux';

import LoaderReducer from './LoaderIndicator/LoaderIndicatorReducer';
import ToastReducer from './Toast/ToastReducer';
import TodoReducer from './Todo/TodoReducer';

const reducer = combineReducers({
    loader: LoaderReducer,
    toast: ToastReducer,
    todo: TodoReducer
});

export default reducer;