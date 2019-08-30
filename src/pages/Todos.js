import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTodos } from 'Modules/todos';
import { Grid } from '@material-ui/core';
import HeaderRow from './todos/HeaderRow';
import InputRow from './todos/InputRow';
import ListRow from './todos/ListRow';


export class Todos extends React.Component {
    componentDidMount() {
        const { fetchData } = this.props;
        fetchData();
    }

    render() {
        return (
            <div>
                <Grid container spacing={0} justify="center">
                    <Grid item xs={12} md={4}>
                        <HeaderRow />
                    </Grid>
                </Grid>
                <Grid container spacing={0} justify="center">
                    <Grid item xs={12} md={4} lg={2}>
                        <InputRow />
                    </Grid>
                </Grid>
                <Grid container spacing={0} justify="center">
                    <Grid item xs={12} md={4} lg={2}>
                        <ListRow />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Todos.propTypes = {
    fetchData: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
    fetchData: () => dispatch(fetchTodos()),
});

export default connect(undefined, mapDispatchToProps)(Todos);
