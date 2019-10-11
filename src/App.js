import React from 'react';
import Todos from './pages/Todos';

const todoList = [
    { id: 1, text: 'Item One', done: false },
    { id: 2, text: 'Item Two', done: false },
    { id: 3, text: 'Item Three', done: false },
];

export default function App() {
    return (
        <Todos todoList={todoList} />
    );
}
