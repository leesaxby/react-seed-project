import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTodos, updateDoneStatus } from '../modules/todos';
import { Grid } from 'react-bootstrap';

import HeaderRow from './todos/HeaderRow';
import InputRow from './todos/InputRow';
import ListRow from './todos/ListRow';

export class Todos extends React.Component {

    static defaultProps = {
        listItems: []
    };

    static propTypes = {
        listItems: PropTypes.arrayOf(
            PropTypes.shape({
                done: PropTypes.bool
            })
        ),
        updateDoneStatus: PropTypes.func.isRequired,
        fetchData: PropTypes.func.isRequired
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
                <ListRow updateDoneStatus={this.props.updateDoneStatus} listItems={this.props.listItems} />
            </Grid>
            </div>
        );
    }

}

const filterTodos = (list, filter) => {
    return list.filter(({ done }) => filter === 'DONE' ? done : !done);
};

const mapStateToProps = ({ todos: { listItems, filter } }) => {
    return {
        listItems: filterTodos(listItems, filter),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchTodos()),
        updateDoneStatus: (id, doneStatus) => dispatch(updateDoneStatus(id, doneStatus))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);