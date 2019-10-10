import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { injectIntl, defineMessages } from 'react-intl';

const messages = defineMessages({
    'todo.form.addItem': {
        id: 'todo.form.addItem',
        description: 'Placeholder for the todo input',
        defaultMessage: 'Add Item',
    },
});

const Form = ({ intl, onAddItem }) => {
    const [newItem, setNewItem] = useState('');

    const addTodoItem = () => {
        onAddItem(newItem);
        setNewItem('');
    };

    const updateNewItem = (e) => setNewItem(e.target.value);

    const submitTodo = (e) => {
        addTodoItem();
        e.preventDefault();
    };

    return (
        <form onSubmit={submitTodo}>
            <TextField
                type="text"
                data-test-id="todo-add-item"
                fullWidth
                id="todoInput"
                label={intl.formatMessage(messages['todo.form.addItem'])}
                aria-label={intl.formatMessage(messages['todo.form.addItem'])}
                value={newItem}
                onChange={updateNewItem} />
        </form>
    );
};

Form.propTypes = {
    onAddItem: PropTypes.func.isRequired,
    intl: PropTypes.shape({
        formatMessage: PropTypes.func.isRequired,
    }).isRequired,
};

export default injectIntl(Form);
