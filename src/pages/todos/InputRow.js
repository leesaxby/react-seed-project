import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import Form from './Form';
import Filter from './Filter';

export default function InputRow({ filter, updateFilter, addTodo }) {

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
