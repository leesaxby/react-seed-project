import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem, FormControl, Glyphicon } from 'react-bootstrap';

export default function TodoItem({ item, onToggleDone }) {
    const toggleDone = () => {
        onToggleDone(item);
    };

    return (
        <ListGroupItem onClick={ toggleDone }
                       data-test-id="todo-item">

            <FormControl.Static style={{ 'textDecoration': item.done ? 'line-through' : '' }}>

                <Glyphicon glyph="glyphicon glyphicon-ok"
                           style={{ 'marginRight': '15px' }}/>
                { item.text }

            </FormControl.Static>

        </ListGroupItem>
    );
}

TodoItem.propTypes = {
    item: PropTypes.shape({
        text: PropTypes.string,
        done: PropTypes.bool.isRequired
    }),
    onToggleDone: PropTypes.func.isRequired
};
