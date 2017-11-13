import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem, FormControl, Glyphicon } from 'react-bootstrap';

export default function TodoItem({ item, onToggleDone }) {
    const toggleDone = () => {
        onToggleDone(item);
    };

    const labelId = 'todoItem' + item._id + 'Label';
    const aria = {
        role: 'button',
        tabIndex: 0,
        onKeyDown: e => {
            if(e.keyCode === 13) {
                toggleDone();
            }
        },
        'aria-labelledby': labelId
    };
            
    return (
        <ListGroupItem { ...aria } onClick={ toggleDone }
                       data-test-id="todo-item">

            <FormControl.Static id={ labelId } style={{ 'textDecoration': item.done ? 'line-through' : '' }}>

                <Glyphicon glyph="glyphicon glyphicon-ok"
                           style={{ 'marginRight': '15px' }}/>
                { item.text }

            </FormControl.Static>

        </ListGroupItem>
    );
}

TodoItem.propTypes = {
    item: PropTypes.shape({
        _id: PropTypes.number.isRequired,
        text: PropTypes.string,
        done: PropTypes.bool.isRequired
    }),
    onToggleDone: PropTypes.func.isRequired
};
