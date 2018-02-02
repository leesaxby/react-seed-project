import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Grid from 'material-ui/Grid';

import { fetchTodos } from 'Modules/todos';
import HeaderRow from './todos/HeaderRow';
import InputRow from './todos/InputRow';
import ListRow from './todos/ListRow';

export class Todos extends React.Component {

    static propTypes = {
        fetchData: PropTypes.func.isRequired,
    };

    componentWillMount() {
        this.props.fetchData();
    }

    render() {
        return (
            <Grid container justify="center">
                <Grid item xs={12}>
                    <Grid container justify="center">
                        <HeaderRow />
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify="center">
                        <InputRow />
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container justify="center">
                        <ListRow />
                    </Grid>
                </Grid>
            </Grid>
        );
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchTodos()),
    };
};

export default connect(undefined, mapDispatchToProps)(Todos);