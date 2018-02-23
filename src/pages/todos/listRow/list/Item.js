import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem, FormControl, Glyphicon } from 'react-bootstrap';

export default function Item({ item, onClick }) {
    const triggerClick = () => {
        onClick(item);
    };

    const labelId = `todoItem${item.id}Label`;
    const aria = {
        role: 'button',
        tabIndex: 0,
        onKeyDown: (e) => {
            if (e.keyCode === 13) {
                triggerClick();
            }
        },
        'aria-labelledby': labelId,
    };

    return (
        <ListGroupItem
            {...aria}
            onClick={triggerClick}
            data-test-id="todo-item">

            <FormControl.Static
                id={labelId}
                style={{ textDecoration: item.done ? 'line-through' : '' }}>

                <Glyphicon
                    glyph="glyphicon glyphicon-ok"
                    style={{ marginRight: '15px' }} />

                { item.text }
            </FormControl.Static>

        </ListGroupItem>
    );
}

Item.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string,
        done: PropTypes.bool.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
};
