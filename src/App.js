import React from 'react';
import { combineReducers } from 'redux';

import Todos from './pages/Todos';
import { todos as todoReducer } from './modules/todos.reducers.js';

export const rootReducer = combineReducers({ todos: todoReducer });

export function App() {
    return (
        <Todos />
    );
}