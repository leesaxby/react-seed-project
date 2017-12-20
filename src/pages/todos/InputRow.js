import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { addTodo, changeFilter } from '../../modules/todos';
import Form from './inputRow/Form';
import Filter from './inputRow/Filter';

export function InputRow({ filter, updateFilter, addTodo }) {

    const addTodoItem = (newItem) => addTodo({ text: newItem, done: false });

    return (
        <Row>
            <Col sm={8} lg={8} smOffset={1} lgOffset={2}>
                <Form onAddTodoItem={ addTodoItem } />
            </Col>
            <Col sm={3} lg={2}>
                <Filter filter={ filter }
                            onUpdateFilter={ updateFilter } />
            </Col>
        </Row>
    );
}

InputRow.defaultProps = {
    filter: 'ACTIVE'
};

InputRow.propTypes = {
    filter: PropTypes.oneOf([ 'ACTIVE', 'DONE' ]),
    addTodo: PropTypes.func.isRequired,
    updateFilter: PropTypes.func.isRequired
};

const mapStateToProps = ({ todos: { filter } }) => ({ filter });

const mapDispatchToProps = (dispatch) => {
    return {
        updateFilter: (filter) => dispatch(changeFilter(filter)),
        addTodo: (todo) => dispatch(addTodo(todo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputRow);