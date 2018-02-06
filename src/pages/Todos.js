import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTodos } from 'Modules/todos';
import { Grid } from 'react-bootstrap';

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
            <div>
                <Grid>
                    <HeaderRow />
                    <InputRow />
                    <ListRow />
                </Grid>
            </div>
        );
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchTodos()),
    };
};

export default connect(undefined, mapDispatchToProps)(Todos);