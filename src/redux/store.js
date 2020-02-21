
import {createStore, applyMiddleware} from 'redux';

import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares)) // vai unir todos os middleware do array

export default store;
