import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl, defineMessages } from 'react-intl';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

const messages = defineMessages({
    'todo.filter.ariaLabel': {
        id: 'todo.filter.ariaLabel',
        description: 'Label for the todo filter choice',
        defaultMessage: 'choose filter'
    },
    'todo.filter.todo': {
        id: 'todo.filter.todo',
        description: 'Label for the button that filters active todos',
        defaultMessage: 'todo'
    },
    'todo.filter.done': {
        id: 'todo.filter.done',
        description: 'Label for the button that filters complete todos',
        defaultMessage: 'done'
    }
});

export class Filter extends React.Component {

    static propTypes = {
        filter: PropTypes.oneOf([ 'ACTIVE', 'DONE' ]).isRequired,
        onUpdateFilter: PropTypes.func.isRequired,
        intl: PropTypes.shape({
          formatMessage: PropTypes.func.isRequired
        }).isRequired
    };

    render() {
        const { filter, onUpdateFilter, intl } = this.props;
        return(
            <ToggleButtonGroup type="radio"
                               name="filterToggle"
                               role="radiogroup"
                               aria-label={intl.formatMessage(messages['todo.filter.ariaLabel'])}
                               value={filter}
                               onChange={onUpdateFilter}>

                <ToggleButton value="ACTIVE"
                              role="radio"
                              aria-checked={String(filter === 'ACTIVE')}>
                    <FormattedMessage {...messages['todo.filter.todo']} />
                </ToggleButton>

                <ToggleButton value="DONE"
                              role="radio"
                              aria-checked={String(filter === 'DONE')}>
                    <FormattedMessage {...messages['todo.filter.done']} />
                </ToggleButton>

            </ToggleButtonGroup>
        );
    }
}

export default injectIntl(Filter);
