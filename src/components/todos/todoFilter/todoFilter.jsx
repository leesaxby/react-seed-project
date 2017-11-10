import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

export class TodoFilter extends React.Component {
    constructor() {
        super();
        this.updateFilter = this.updateFilter.bind(this);
    }
    render() {
        const { filter } = this.props;
        return(
            <ToggleButtonGroup type="radio"
                               name="filterToggle"
                               value={filter}
                               onChange={this.updateFilter}>

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
    updateFilter(filter) {
        this.props.history.push(filter);
    }
}

TodoFilter.propTypes = {
    filter: PropTypes.oneOf([ 'ACTIVE', 'DONE' ]).isRequired,
    history: PropTypes.object.isRequired
};

export default withRouter(TodoFilter);