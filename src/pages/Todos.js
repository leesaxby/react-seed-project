import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import HeaderRow from './todos/HeaderRow';
import InputRow from './todos/InputRow';
import List from './todos/List';

const Todos = ({ todoList }) => {
    const [showDone, setShowDone] = useState(false);
    const [todos, setTodos] = useState(todoList);

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

Todos.propTypes = {
    todoList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            done: PropTypes.bool.isRequired,
        }),
    ).isRequired,
};

export default Todos;
