import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Checkbox } from '@material-ui/core';

export default function Item({ item, onItemSelect }) {
    const triggerClick = () => onItemSelect(item);
    const buttonLabelId = `todoItemButton${item.id}Label`;
    const checkboxLabelId = `todoItemCheckbox${item.id}Label`;

    const aria = {
        role: 'button',
        tabIndex: 0,
        onKeyDown: (e) => {
            if (e.keyCode === 13) {
                triggerClick();
            }
        },
        'aria-labelledby': buttonLabelId,
    };

    return (
        <ListItem
            {...aria}
            button
            dense
            onClick={triggerClick}
            data-testid="todo-item"
            component="li"
            label={buttonLabelId}
            id={buttonLabelId}
            style={{ textDecoration: item.done ? 'line-through' : '' }}>

            <Checkbox
                id={checkboxLabelId}
                checked={item.done}
                tabIndex={-1}
                disableRipple
                aria-label={checkboxLabelId} />

            {item.text}

        </ListItem>
    );
}

Item.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string,
        done: PropTypes.bool.isRequired,
    }).isRequired,
    onItemSelect: PropTypes.func.isRequired,
};
