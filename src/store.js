import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import createHistory from 'history/createBrowserHistory';
import { routerMiddleware, routerReducer } from 'react-router-redux';

import todos from './modules/todos';

const rootReducer = combineReducers({ todos, router: routerReducer });

export const history = createHistory();

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, routerMiddleware(history)),
);

export default store;
