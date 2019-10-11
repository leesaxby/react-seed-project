import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl, defineMessages } from 'react-intl';
import { Switch } from '@material-ui/core';

const messages = defineMessages({
    'todo.filter.ariaLabel': {
        id: 'todo.filter.ariaLabel',
        description: 'Label for the todo filter choice',
        defaultMessage: 'choose filter',
    },
    'todo.filter.showDone': {
        id: 'todo.filter.showDone',
        description: 'Label for the toggle',
        defaultMessage: 'Show Done',
    },
});

const Filter = ({ intl, showDone, onUpdateShowDone }) => (
    <>
        <FormattedMessage {...messages['todo.filter.showDone']} />
        <Switch
            checked={showDone}
            onChange={onUpdateShowDone}
            color="primary"
            id="todoStateSwitch"
            inputProps={{
                'data-testid': 'show-done',
            }}
            aria-label={intl.formatMessage(messages['todo.filter.ariaLabel'])} />
    </>
);

Filter.propTypes = {
    showDone: PropTypes.bool.isRequired,
    onUpdateShowDone: PropTypes.func.isRequired,
    intl: PropTypes.shape({
        formatMessage: PropTypes.func.isRequired,
    }).isRequired,
};

export default injectIntl(Filter);
