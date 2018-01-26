import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl } from 'react-bootstrap';
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
                <FormGroup bsSize="large">
                    <FormControl type="text"
                                 data-test-id="todo-add-item"
                                 placeholder={this.props.intl.formatMessage(messages['todo.form.addItem'])}
                                 aria-label={this.props.intl.formatMessage(messages['todo.form.addItem'])}
                                 value={this.state.newItem}
                                 onChange={this.updateNewItem}
                                 onKeyPress={this.handleKeyPress}/>
                </FormGroup>
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