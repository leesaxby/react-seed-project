import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { addTodo, fetchTodos, updateDoneStatus } from './todos.actions.js';

import styled from 'styled-components';
import TodoList from './todoList/todoList.jsx';
import TodoForm from './todoForm/todoForm.jsx';
import TodoFilter from './todoFilter/todoFilter.jsx';

const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;

const filterTodos = (list, filter) => {
    return list.filter(({ done }) => filter === 'DONE' ? done : !done);
};

class Todos extends React.Component {
    constructor() {
        super();

        this.addTodoItem = this.addTodoItem.bind(this);
        this.toggleDone = this.toggleDone.bind(this);
        this.getTodos = this.getTodos.bind(this);
    }

    componentWillMount() {
        this.getTodos();
    }

    render() {
        return (
            <div>
                <FlexContainer>
                    <TodoForm onAddTodoItem={this.addTodoItem} />
                    <TodoFilter filter={this.props.filter} />
                </FlexContainer>

                <FlexContainer>
                    <TodoList listItems={this.props.listItems}
                              onToggleDone={this.toggleDone}/>
                </FlexContainer>
            </div>
        );
    }

    componentWillUnmount() {
        clearTimeout(this.todoPoll);
    }

    addTodoItem(newItem) {
        this.props.addTodo({ text: newItem, done: false });
    }

    toggleDone({ _id, done }) {
        this.props.updateDoneStatus(_id, done);
    }

    getTodos() {
        this.props.fetchData();
    }
}

Todos.defaultProps = {
    filter: 'ACTIVE',
    listItems: []
};

Todos.propTypes = {
    filter: PropTypes.oneOf([ 'ACTIVE', 'DONE' ]),
    listItems: PropTypes.arrayOf(
        PropTypes.shape({
            done: PropTypes.bool
        })
    ),
    addTodo: PropTypes.func.isRequired,
    updateDoneStatus: PropTypes.func.isRequired,
    fetchData: PropTypes.func.isRequired
};

const mapStateToProps = (state, { match: { params: { filter } } }) => {
    return {
        listItems: filterTodos(state.todos.listItems, filter),
        filter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchTodos()),
        addTodo: (todo) => dispatch(addTodo(todo)),
        updateDoneStatus: (id, doneStatus) => dispatch(updateDoneStatus(id, doneStatus))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Todos));