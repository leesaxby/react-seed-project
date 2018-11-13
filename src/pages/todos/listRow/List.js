import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateDoneStatus } from 'Modules/todos';
import getFilteredTodos from 'Modules/todos.selector';
import { List } from '@material-ui/core';

import Item from './list/Item';

export const TodoList = ({ listItems, onItemClick }) => {
    const getListItems = () => (
        listItems.map(item => (
            <Item
                key={item.id}
                item={item}
                onClick={onItemClick} />)));

    return (
        <List>{getListItems()}</List>
    );
};

TodoList.defaultProps = {
    listItems: [],
};

TodoList.propTypes = {
    listItems: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string,
            done: PropTypes.bool.isRequired,
        }),
    ),
    onItemClick: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    listItems: getFilteredTodos(state),
});

const mapDispatchToProps = dispatch => ({
    onItemClick: ({ id, done }) => dispatch(updateDoneStatus(id, !done)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
