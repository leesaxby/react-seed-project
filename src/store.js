import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { createBrowserHistory } from 'history';
import { routerMiddleware, connectRouter } from 'connected-react-router';

import todos from './modules/todos';

const rootReducer = history => combineReducers({ todos, router: connectRouter(history) });

export const history = createBrowserHistory();

const store = createStore(
    rootReducer(history),
    applyMiddleware(thunk, routerMiddleware(history)),
);

export default store;
