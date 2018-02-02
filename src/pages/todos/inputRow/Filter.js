import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, defineMessages } from 'react-intl';
import { FormControlLabel } from 'material-ui/Form';
import Radio, { RadioGroup } from 'material-ui/Radio';

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
    'todo.filter.done': {
        id: 'todo.filter.done',
        description: 'Label for the button that filters complete todos',
        defaultMessage: 'done',
    },
});

export class Filter extends React.Component {

    static defaultProps = {
      filter: 'ACTIVE',
    }

    static propTypes = {
        filter: PropTypes.oneOf([ 'ACTIVE', 'DONE' ]),
        onUpdateFilter: PropTypes.func.isRequired,
        intl: PropTypes.shape({
          formatMessage: PropTypes.func.isRequired,
        }).isRequired,
    };

    render() {
        const { filter, onUpdateFilter, intl } = this.props;
        return(
            <RadioGroup name="filters"
                        aria-label={intl.formatMessage(messages['todo.filter.ariaLabel'])}
                        value={filter}
                        onChange={onUpdateFilter}>
                <FormControlLabel value="ACTIVE"
                                  label={intl.formatMessage(messages['todo.filter.todo'])}
                                  control={
                                      <Radio aria-checked={String(filter === 'ACTIVE')}/>
                                  }/>
                <FormControlLabel value="DONE"
                                  label={intl.formatMessage(messages['todo.filter.done'])}
                                  control={
                                      <Radio aria-checked={String(filter === 'DONE')}/>
                                  }/>
            </RadioGroup>
        );
    }
}

export default injectIntl(Filter);
