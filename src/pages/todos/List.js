import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

import Item from './Item';

export default function List(props) {
    const getListItems = () => {
        return props.listItems
            .map(item => <Item key={item._id}
                                   item={item}
                                   onToggleDone={props.onToggleDone} />
            );
    };

    return (
        <ListGroup>{ getListItems() }</ListGroup>
    );
}

List.propTypes = {
    listItems: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.number.isRequired
        })
    ).isRequired,
    onToggleDone: PropTypes.func.isRequired
};