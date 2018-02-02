import React from 'react';
import PropTypes from 'prop-types';
import Input from 'material-ui/Input';
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

    render() {
        return (
            <form onSubmit={this.submitTodo}>
                  <Input fullWidth
                         type="text"
                         value={this.state.newItem}
                         onChange={this.updateNewItem}
                         inputProps={{
                            'data-test-id': 'todo-add-item',
                            'placeholder': this.props.intl.formatMessage(messages['todo.form.addItem']),
                            'aria-label': this.props.intl.formatMessage(messages['todo.form.addItem']),
                         }}
                    />
            </form>
        );
    }

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

}

export default injectIntl(Form);