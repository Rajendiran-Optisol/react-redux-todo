import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as Services from '../utilities/HttpUtility/ServiceInstance';

import RootReducer from './rootReducer';

const store = createStore(RootReducer, applyMiddleware(thunk.withExtraArgument(Services)));

export default store;
