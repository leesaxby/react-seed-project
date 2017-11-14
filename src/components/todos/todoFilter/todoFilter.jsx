import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

export class TodoFilter extends React.Component {

    static propTypes = {
        filter: PropTypes.oneOf([ 'ACTIVE', 'DONE' ]).isRequired,
        onUpdateFilter: PropTypes.func.isRequired
    };

    render() {
        const { filter, onUpdateFilter, intl } = this.props;
        return(
            <ToggleButtonGroup type="radio"
                               name="filterToggle"
                               role="radiogroup"
                               aria-label={intl.formatMessage({id:'todo.filter.ariaLabel'})}
                               value={filter}
                               onChange={onUpdateFilter}>

                <ToggleButton value="ACTIVE"
                              role="radio"
                              aria-checked={String(filter === 'ACTIVE')}>
                    <FormattedMessage id="todo.filter.todo"/>
                </ToggleButton>

                <ToggleButton value="DONE"
                              role="radio"
                              aria-checked={String(filter === 'DONE')}>
                    <FormattedMessage id="todo.filter.done"/>
                </ToggleButton>

            </ToggleButtonGroup>
        );
    }
}

TodoFilter.propTypes = {
    filter: PropTypes.oneOf([ 'ACTIVE', 'DONE' ]).isRequired,
    onUpdateFilter: PropTypes.func.isRequired,
    intl: PropTypes.shape({
      formatMessage: PropTypes.func.isRequired
    }).isRequired
};

export default injectIntl(TodoFilter);
