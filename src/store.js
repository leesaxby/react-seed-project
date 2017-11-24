import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';

import todos from './modules/todos';

const rootReducer = combineReducers({ todos });

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;
