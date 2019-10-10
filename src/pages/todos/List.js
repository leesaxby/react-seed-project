import React from 'react';
import PropTypes from 'prop-types';
import { List } from '@material-ui/core';
import Item from './list/Item';

export const TodoList = ({ listItems, onItemSelect }) => (
    <List>
        {
            listItems.map((item) => (
                <Item
                    key={item.id}
                    item={item}
                    onItemSelect={onItemSelect} />
            ))
        }
    </List>
);

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
    onItemSelect: PropTypes.func.isRequired,
};

export default TodoList;
