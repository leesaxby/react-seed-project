import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateDoneStatus } from 'Modules/todos';
import { Row, Col } from 'react-bootstrap';
import List from './listRow/List';

export const ListRow = ({ updateDoneStatus, listItems }) => (
    <Row>
        <Col sm={8} lg={6} smOffset={2} lgOffset={3}>
            <List listItems={ listItems }
                      onToggleDone={ updateDoneStatus }/>
        </Col>
    </Row>
);

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
        updateDoneStatus: ({ _id, done }) => dispatch(updateDoneStatus(_id, !done))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListRow);