import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

const middlewares = [thunk];

export default (state) => configureStore(middlewares)(state);