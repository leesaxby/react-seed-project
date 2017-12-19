import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo, fetchTodos, updateDoneStatus, changeFilter } from '../modules/todos';
import { Grid } from 'react-bootstrap';

import HeaderRow from './todos/HeaderRow';
import InputRow from './todos/InputRow';
import ListRow from './todos/ListRow';

export class Todos extends React.Component {

    static defaultProps = {
        filter: 'ACTIVE',
        listItems: []
    };

    static propTypes = {
        filter: PropTypes.oneOf([ 'ACTIVE', 'DONE' ]),
        listItems: PropTypes.arrayOf(
            PropTypes.shape({
                done: PropTypes.bool
            })
        ),
        addTodo: PropTypes.func.isRequired,
        updateDoneStatus: PropTypes.func.isRequired,
        fetchData: PropTypes.func.isRequired,
        updateFilter: PropTypes.func.isRequired
    };

    componentWillMount() {
        this.props.fetchData();
    }

    render() {
        return (
            <div>
            <Grid>
                <HeaderRow />
                <InputRow filter={this.props.filter} updateFilter={this.props.updateFilter} addTodo={this.props.addTodo} />
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
        filter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchTodos()),
        addTodo: (todo) => dispatch(addTodo(todo)),
        updateDoneStatus: (id, doneStatus) => dispatch(updateDoneStatus(id, doneStatus)),
        updateFilter: (filter) => dispatch(changeFilter(filter))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);