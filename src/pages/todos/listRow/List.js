import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateDoneStatus } from 'Modules/todos';
import { getFilteredTodos } from 'Modules/todos.selector';
import { ListGroup } from 'react-bootstrap';

import Item from './list/Item';

export function List({ listItems, onItemClick }) {
    const getListItems = () => {
        return listItems
            .map(item => <Item key={item._id}
                                   item={item}
                                   onClick={onItemClick} />
            );
    };

    return (
        <ListGroup>{ getListItems() }</ListGroup>
    );
}

List.defaultProps = {
    listItems: [],
};

List.propTypes = {
    listItems: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.number.isRequired,
            text: PropTypes.string,
            done: PropTypes.bool.isRequired,
        })
    ),
    onItemClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        listItems: getFilteredTodos(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onItemClick: ({ _id, done }) => dispatch(updateDoneStatus(_id, !done)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);