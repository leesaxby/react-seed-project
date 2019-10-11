import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import HeaderRow from './todos/HeaderRow';
import InputRow from './todos/InputRow';
import List from './todos/List';

const Todos = () => {
    const [showDone, setShowDone] = useState(false);
    const [todos, setTodos] = useState([
        { id: 1, text: 'Item One', done: false },
        { id: 2, text: 'Item Two', done: false },
        { id: 3, text: 'Item Three', done: false },
    ]);

    const getFilteredList = (list) => list.filter(({ done }) => done === showDone);

    const toggleShowDone = () => setShowDone((done) => !done);

    const updateDoneStatus = (item) => {
        const list = todos.filter(({ id }) => item.id !== id);
        setTodos([...list, { ...item, done: !item.done }]);
    };

    const addTodo = (text) => {
        const ids = todos.map((todo) => todo.id);
        const id = ids.length ? Math.max(...ids) + 1 : 0;
        setTodos([...todos, { id, text, done: false }]);
    };

    return (
        <>
            <Grid container spacing={0} justify="center">
                <Grid item xs={12} md={4}>
                    <HeaderRow />
                </Grid>
            </Grid>
            <Grid container spacing={0} justify="center">
                <Grid item xs={12} md={4} lg={2}>
                    <InputRow
                        showDone={showDone}
                        toggleShowDone={toggleShowDone}
                        addTodo={addTodo} />
                </Grid>
            </Grid>
            <Grid container spacing={0} justify="center">
                <Grid item xs={12} md={4} lg={2}>
                    <List
                        listItems={getFilteredList(todos)}
                        onItemSelect={updateDoneStatus} />
                </Grid>
            </Grid>
        </>
    );
};

export default Todos;
