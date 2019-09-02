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
    constructor(props) {
        super(props);
        this.state = {
            newItem: '',
        };
    }

    addTodoItem = () => {
        const { onAddItem } = this.props;
        const { newItem } = this.state;
        onAddItem(newItem);
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
        const { intl } = this.props;
        const { newItem } = this.state;
        return (
            <form onSubmit={this.submitTodo}>
                <TextField
                    type="text"
                    data-test-id="todo-add-item"
                    fullWidth
                    id="todoInput"
                    label={intl.formatMessage(messages['todo.form.addItem'])}
                    aria-label={intl.formatMessage(messages['todo.form.addItem'])}
                    value={newItem}
                    onChange={this.updateNewItem} />
            </form>
        );
    }
}

Form.propTypes = {
    onAddItem: PropTypes.func.isRequired,
    intl: PropTypes.shape({
        formatMessage: PropTypes.func.isRequired,
    }).isRequired,
};

export default injectIntl(Form);
