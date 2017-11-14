import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

export class TodoFilter extends React.Component {

    static propTypes = {
        filter: PropTypes.oneOf([ 'ACTIVE', 'DONE' ]).isRequired,
        onUpdateFilter: PropTypes.func.isRequired
    };

    render() {
        const { filter, onUpdateFilter } = this.props;
        return(
            <ToggleButtonGroup type="radio"
                               name="filterToggle"
                               value={filter}
                               onChange={onUpdateFilter}>

                <ToggleButton value="ACTIVE"
                              bsStyle="info">
                    <FormattedMessage id="todo.filter.todo"/>
                </ToggleButton>

                <ToggleButton value="DONE"
                              bsStyle="info">
                    <FormattedMessage id="todo.filter.done"/>
                </ToggleButton>

            </ToggleButtonGroup>
        );
    }
}

export default TodoFilter;