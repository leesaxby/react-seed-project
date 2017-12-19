import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo, fetchTodos, updateDoneStatus, changeFilter } from '../modules/todos';
import { Grid, Row, Col, Image } from 'react-bootstrap';

import List from './todos/List';
import Form from './todos/Form';
import Filter from './todos/Filter';

import listImage from '../images/list.png';

const HeaderRow = () => (
    <Row>
        <Col sm={1} lg={1} smOffset={4} lgOffset={5}>
            <Image src={ listImage }
                   alt="List Image"
                   style={{ 'height': '200px',
                            'marginBottom': '20px' }}/>
        </Col>
    </Row>
);

const InputRow = ({ filter, updateFilter, addTodo }) => {

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
};

InputRow.defaultProps = {
    filter: 'ACTIVE'
};
InputRow.propTypes = {
    filter: PropTypes.oneOf([ 'ACTIVE', 'DONE' ]),
    addTodo: PropTypes.func.isRequired,
    updateFilter: PropTypes.func.isRequired
};

const ListRow = ({ updateDoneStatus, listItems }) => {

    const toggleDone = ({ _id, done }) => updateDoneStatus(_id, !done);

    return (
        <Row>
            <Col sm={8} lg={6} smOffset={2} lgOffset={3}>
                <List listItems={ listItems }
                          onToggleDone={ toggleDone }/>
            </Col>
        </Row>
    );
};

ListRow.defaultProps = {
    listItems: []
};
ListRow.propTypes = {
    listItems: PropTypes.arrayOf(
        PropTypes.shape({
            done: PropTypes.bool
        })
    ),
    updateDoneStatus: PropTypes.func.isRequired
};

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