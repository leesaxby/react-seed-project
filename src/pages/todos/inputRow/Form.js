import React from 'react';
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

export class Form extends React.Component {
    static propTypes = {
        onAddItem: PropTypes.func.isRequired,
        intl: PropTypes.shape({
            formatMessage: PropTypes.func.isRequired,
        }).isRequired,
    };

    state = {
        newItem: '',
    };

    addTodoItem = () => {
        this.props.onAddItem(this.state.newItem);
        this.setState({ newItem: '' });
    }

    updateNewItem = (e) => {
        this.setState({ newItem: e.target.value });
    }

    submitTodo = (e) => {
        this.addTodoItem();
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.submitTodo}>
                <TextField
                    type="text"
                    data-test-id="todo-add-item"
                    fullWidth
                    id="todoInput"
                    label={this.props.intl.formatMessage(messages['todo.form.addItem'])}
                    aria-label={this.props.intl.formatMessage(messages['todo.form.addItem'])}
                    value={this.state.newItem}
                    onChange={this.updateNewItem} />
            </form>
        );
    }
}

export default injectIntl(Form);
