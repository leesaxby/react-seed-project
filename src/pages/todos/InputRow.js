import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { addNewTodo } from 'Modules/todos';
import { Grid } from '@material-ui/core';
import Form from './inputRow/Form';
import Filter from './inputRow/Filter';

export const InputRow = ({ filter, updateFilter, addTodo }) => (
    <div>
        <Grid item xs={12} >
            <Form onAddItem={addTodo} />
        </Grid>

        <Grid item xs={12} >
            <Filter
                filter={filter}
                onUpdateFilter={updateFilter} />
        </Grid>
    </div>

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
