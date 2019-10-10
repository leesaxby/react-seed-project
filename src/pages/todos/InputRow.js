import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import Form from './inputRow/Form';
import Filter from './inputRow/Filter';

export const InputRow = ({ showDone, toggleShowDone, addTodo }) => (
    <>
        <Grid item xs={12}>
            <Form onAddItem={addTodo} />
        </Grid>

        <Grid item xs={12}>
            <Filter
                showDone={showDone}
                onUpdateShowDone={toggleShowDone} />
        </Grid>
    </>
);

InputRow.propTypes = {
    showDone: PropTypes.bool.isRequired,
    addTodo: PropTypes.func.isRequired,
    toggleShowDone: PropTypes.func.isRequired,
};


export default InputRow;
