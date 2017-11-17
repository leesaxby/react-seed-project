import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

import TodoItem from './Item';

export default function TodoList(props) {
    const getListItems = () => {
        return props.listItems
            .map(item => <TodoItem key={item._id}
                                   item={item}
                                   onToggleDone={props.onToggleDone} />
            );
    };

    return (
        <ListGroup>{ getListItems() }</ListGroup>
    );
}

TodoList.propTypes = {
    listItems: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.number.isRequired
        })
    ).isRequired,
    onToggleDone: PropTypes.func.isRequired
};