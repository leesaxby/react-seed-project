import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl } from 'react-bootstrap';
import { injectIntl, intlShape } from 'react-intl';

class TodoForm extends React.Component {

    static propTypes = {
        onAddTodoItem: PropTypes.func.isRequired,
        intl: intlShape.isRequired,
    };

    state = {
        newItem: ''
    };

    render() {
        return (
            <form onSubmit={this.submitTodo}>
                <FormGroup bsSize="large">
                    <FormControl type="text"
                                 data-test-id="todo-add-item"
                                 placeholder={this.props.intl.formatMessage({id:'todo.form.addItem'})}
                                 value={this.state.newItem}
                                 onChange={this.updateNewItem}
                                 />
                </FormGroup>
            </form>
        );
    }

    addTodoItem = () => {
        this.props.onAddTodoItem(this.state.newItem);
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

export default injectIntl(TodoForm);