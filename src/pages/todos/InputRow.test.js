import { addNewTodo } from 'Modules/todos';
import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { push } from 'react-router-redux';
import createComponentWithIntl from 'Test/createComponentWithIntl';

import InputRowContainer, { InputRow } from './InputRow';
import Form from './inputRow/Form';
import Filter from './inputRow/Filter';


describe('An InputRow', () => {
    const setup = () => {
        const props = {
            filter: 'ACTIVE',
            addTodo: jest.fn(),
            updateFilter: jest.fn(),
        };
        const wrapper = shallow(<InputRow {...props} />);

        return {
            props,
            wrapper,
        };
    };

    it('renders component', () => {
        const { props } = setup();
        const tree = createComponentWithIntl(<InputRow {...props} />).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('triggers a callback when the Form requests it', () => {
        const { props, wrapper } = setup();

        const form = wrapper.find(Form).first();
        form.prop('onAddItem')();

        expect(props.addTodo.mock.calls).toHaveLength(1);
    });

    it('triggers a callback when the Filter requests it', () => {
        const { props, wrapper } = setup();

        const filter = wrapper.find(Filter).first();
        filter.prop('onUpdateFilter')();

        expect(props.updateFilter.mock.calls).toHaveLength(1);
    });
});

describe('An InputRow Container', () => {
    const setup = () => {
        const initialState = {
            todos: {
                filter: 'ACTIVE',
            },
        };
        const store = configureStore([thunk])(initialState);
        const wrapper = shallow(<InputRowContainer store={store} />);

        return {
            initialState,
            store,
            wrapper,
        };
    };

    it('renders component', () => {
        const { store } = setup();
        const tree = createComponentWithIntl(<InputRowContainer store={store} />).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('maps the right portion of the state to InputRow props', () => {
        const { wrapper, initialState } = setup();

        expect(wrapper.find(InputRow).prop('filter')).toEqual(initialState.todos.filter);
    });

    it('dispatches the right actions from InputRow props', () => {
        const { wrapper, store } = setup();

        expect(store.getActions()).toHaveLength(0);

        const newTodo = 'A New Todo';
        const newFilter = 'DONE';
        wrapper.prop('addTodo')(newTodo);
        wrapper.prop('updateFilter')(newFilter);

        const actions = store.getActions();
        expect(actions).toHaveLength(2);
        expect(actions[0]).toEqual(addNewTodo({ text: newTodo, done: false }));
        expect(actions[1]).toEqual(push(newFilter));
    });
});
