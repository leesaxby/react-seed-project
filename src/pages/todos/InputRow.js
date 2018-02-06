import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Row, Col } from 'react-bootstrap';
import { addTodo } from 'Modules/todos';
import Form from './inputRow/Form';
import Filter from './inputRow/Filter';

export const InputRow = ({ updateFilter, addTodo, filter }) => (
    <Row>
        <Col sm={8} lg={8} smOffset={1} lgOffset={2}>
            <Form onAddItem={ addTodo } />
        </Col>
        <Col sm={3} lg={2}>
            <Filter filter={ filter } onUpdateFilter={ updateFilter } />
        </Col>
    </Row>
);

InputRow.propTypes = {
    filter: PropTypes.oneOf([ 'ACTIVE', 'DONE' ]),
    addTodo: PropTypes.func.isRequired,
    updateFilter: PropTypes.func.isRequired,
};

const mapStateToProps = ({ todos: { filter } }) => ({ filter });

const mapDispatchToProps = (dispatch) => {
    return {
        updateFilter: (filter) => dispatch(push(filter)),
        addTodo: (todo) => dispatch(addTodo({ text: todo, done: false })),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputRow);