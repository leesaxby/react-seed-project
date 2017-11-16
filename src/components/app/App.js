import React from 'react';
import { combineReducers } from 'redux';

import Todos from '../todos/todos.js';
import { todos as todoReducer } from '../todos/todos.reducers.js';

export const rootReducer = combineReducers({ todos: todoReducer });

export function App() {
    return (
        <Todos />
    );
}