import React from 'react';
import { combineReducers } from 'redux';

import Todos from '../todos/todos.jsx';
import { todos } from '../todos/todos.reducers.js';

export const rootReducer = combineReducers({ todos });

export function App() {
    return (
        <Todos/>
    );
}