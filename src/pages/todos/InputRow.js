import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Grid from 'material-ui/Grid';

import { addTodo, changeFilter } from 'Modules/todos';
import Form from './inputRow/Form';
import Filter from './inputRow/Filter';

export const InputRow = ({ filter, updateFilter, addTodo }) => (
    <Grid container justify="center" >
        <Grid item xs={3}>
            <Form onAddItem={ addTodo } />
        </Grid>
        <Grid item xs={1}>
            <Grid container justify="center">
                <Filter filter={ filter }
                            onUpdateFilter={ updateFilter } />
            </Grid>
        </Grid>
    </Grid>



);

InputRow.propTypes = {
    filter: PropTypes.oneOf([ 'ACTIVE', 'DONE' ]),
    addTodo: PropTypes.func.isRequired,
    updateFilter: PropTypes.func.isRequired,
};

const mapStateToProps = ({ todos: { filter } }) => ({ filter });

const mapDispatchToProps = (dispatch) => {
    return {
        updateFilter: (filter) => {
            dispatch(push(filter.target.value));
            dispatch(changeFilter(filter.target.value));
        },
        addTodo: (todo) => dispatch(addTodo({ text: todo, done: false })),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputRow);