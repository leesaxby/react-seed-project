import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { addTodo, fetchTodos, updateDoneStatus } from './todos.actions.js';
import { Grid, Row, Col } from 'react-bootstrap';

import TodoList from './todoList/TodoList';
import TodoForm from './todoForm/TodoForm';
import TodoFilter from './todoFilter/TodoFilter';

const filterTodos = (list, filter) => {
    return list.filter(({ done }) => filter === 'DONE' ? done : !done);
};

class Todos extends React.Component {

    static defaultProps = {
        filter: 'ACTIVE',
        listItems: []
    };

    static propTypes = {
        filter: PropTypes.oneOf([ 'ACTIVE', 'DONE' ]),
        listItems: PropTypes.arrayOf(
            PropTypes.shape({
                done: PropTypes.bool
            })
        ),
        addTodo: PropTypes.func.isRequired,
        updateDoneStatus: PropTypes.func.isRequired,
        fetchData: PropTypes.func.isRequired,
        history: PropTypes.object.isRequired
    };

    componentWillMount() {
        this.getTodos();
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col sm={8} lg={8} smOffset={1} lgOffset={2}>
                        <TodoForm onAddTodoItem={this.addTodoItem} />
                    </Col>
                    <Col sm={3} lg={2}>
                        <TodoFilter filter={this.props.filter}
                                    onUpdateFilter={this.updateFilter} />
                    </Col>
                </Row>
                <Row>
                    <Col sm={8} lg={6} smOffset={2} lgOffset={3}>
                        <TodoList listItems={this.props.listItems}
                                  onToggleDone={this.toggleDone}/>
                    </Col>
                </Row>
            </Grid>
        );
    }

    addTodoItem = (newItem) => {
        this.props.addTodo({ text: newItem, done: false });
    }

    toggleDone = ({ _id, done }) => {
        this.props.updateDoneStatus(_id, done);
    }

    getTodos = () => {
        this.props.fetchData();
    }

    updateFilter = (filter) => {
        this.props.history.push(filter);
    }
}

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