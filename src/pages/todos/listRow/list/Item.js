import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import CheckIcon from 'material-ui-icons/Check';
import RestoreIcon from 'material-ui-icons/Restore';

export default function Item({ item, onClick }) {
    const triggerClick = () => {
        onClick(item);
    };

    const labelId = `todoItem${item._id}Label`;
    const aria = {
        role: 'button',
        tabIndex: 0,
        onKeyDown: e => {
            if(e.keyCode === 13) {
                triggerClick();
            }
        },
        'aria-labelledby': labelId,
    };

    return (
        <ListItem { ...aria }
                  button
                  onClick={triggerClick}
                  data-test-id="todo-item">
            <ListItemText id={ labelId }
                          primary={item.text} />
            <ListItemSecondaryAction>
                <IconButton>
                    {
                        item.done ?
                            <RestoreIcon />
                        :
                            <CheckIcon />
                    }
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

Item.propTypes = {
    item: PropTypes.shape({
        _id: PropTypes.number.isRequired,
        text: PropTypes.string,
        done: PropTypes.bool.isRequired,
    }),
    onClick: PropTypes.func.isRequired,
};
