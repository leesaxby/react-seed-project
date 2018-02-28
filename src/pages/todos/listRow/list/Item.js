import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Checkbox } from 'material-ui';

export default function Item({ item, onClick }) {
    const triggerClick = () => {
        onClick(item);
    };

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
            data-test-id="todo-item"
            component="li"
            label={buttonLabelId}
            id={buttonLabelId}
            style={{ textDecoration: item.done ? 'line-through' : '' }}>

            <label htmlFor="checkboxLabelId">
                <Checkbox
                    id={checkboxLabelId}
                    checked={item.done}
                    tabIndex={-1}
                    disableRipple
                    aria-label={checkboxLabelId} />
            </label>

            {item.text}

        </ListItem >
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
