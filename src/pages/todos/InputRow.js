import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Row, Col } from 'react-bootstrap';
import { addNewTodo } from 'Modules/todos';
import Form from './inputRow/Form';
import Filter from './inputRow/Filter';

export const InputRow = ({ filter, updateFilter, addTodo }) => (
    <Row>
        <Col sm={8} lg={8} smOffset={1} lgOffset={2}>
            <Form onAddItem={addTodo} />
        </Col>
        <Col sm={3} lg={2}>
            <Filter
                filter={filter}
                onUpdateFilter={updateFilter} />
        </Col>
    </Row>
);

InputRow.defaultProps = {
    filter: 'ACTIVE',
};

InputRow.propTypes = {
    filter: PropTypes.oneOf(['ACTIVE', 'DONE']),
    addTodo: PropTypes.func.isRequired,
    updateFilter: PropTypes.func.isRequired,
};

const mapStateToProps = ({ todos: { filter } }) => ({ filter });

const mapDispatchToProps = dispatch => ({
    updateFilter: filter => dispatch(push(filter)),
    addTodo: todo => dispatch(addNewTodo({ text: todo, done: false })),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputRow);
