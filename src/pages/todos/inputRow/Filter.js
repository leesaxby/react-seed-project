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
    'todo.filter.todo': {
        id: 'todo.filter.todo',
        description: 'Label for the button that filters active todos',
        defaultMessage: 'todo',
    },
    'todo.filter.showDone': {
        id: 'todo.filter.showDone',
        description: 'Label for the toggle',
        defaultMessage: 'Show Done',
    },
});

export class Filter extends React.Component {
    static defaultProps = {
        filter: 'ACTIVE',
    }

    static propTypes = {
        filter: PropTypes.oneOf(['ACTIVE', 'DONE']),
        onUpdateFilter: PropTypes.func.isRequired,
        intl: PropTypes.shape({
            formatMessage: PropTypes.func.isRequired,
        }).isRequired,
    };

    // Work out if the todo state filter should show the toggle as checked
    active = filter => filter !== 'ACTIVE';

    // Update the todo state filter based on the check bool
    updateToggle = (e, checkedState) => {
        const todoState = checkedState ? 'DONE' : 'ACTIVE';
        this.props.onUpdateFilter(todoState);
    }

    render() {
        const { filter, intl } = this.props;

        return (
            <div>
                <FormattedMessage {...messages['todo.filter.showDone']} />
                <label htmlFor="todoStateSwitch">
                    <Switch
                        checked={this.active(filter)}
                        onChange={this.updateToggle}
                        color="primary"
                        id="todoStateSwitch"
                        aria-label={intl.formatMessage(messages['todo.filter.ariaLabel'])} />
                </label>
            </div>
        );
    }
}

export default injectIntl(Filter);
