import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { Grid } from 'react-bootstrap';
import TodosContainer, { Todos } from './Todos';
import HeaderRow from './todos/HeaderRow';
import InputRow from './todos/InputRow';
import ListRow from './todos/ListRow';
import { fetchTodosSuccess } from 'Modules/todos';

describe('A Todos', () => {

	function setup() {
		const props = {
        	fetchData: jest.fn(),
		};
		const wrapper = shallow(<Todos { ...props } />);

		return {
			props,
			wrapper,
		};
	}

    it('renders a Grid with three rows', () => {
    	const { wrapper } = setup();

    	const grid = wrapper.childAt(0);
    	expect(grid.is(Grid)).toBe(true);
    	expect(grid.childAt(0).is(HeaderRow)).toBe(true);
    	expect(grid.childAt(1).is(InputRow)).toBe(true);
    	expect(grid.childAt(2).is(ListRow)).toBe(true);
    });

    it('triggers a callback when it will mount', () => {
    	const { props } = setup();

    	expect(props.fetchData.mock.calls).toHaveLength(1);
    });

});

describe('A Todos Container', () => {

	function setup() {
		const store = configureStore([thunk])();
		const wrapper = shallow(<TodosContainer store={store} />);
		return {
			store,
			wrapper,
		};
	}

	it('renders without throwing an error', () => {
		const { wrapper } = setup();
		expect(wrapper.exists()).toBe(true);
	});

    it('dispatches the right actions from Todos props', () => {
    	const { store, wrapper } = setup();

    	store.clearActions();
    	wrapper.prop('fetchData')().then(() => {
    		expect(store.getActions()[0]).toEqual(fetchTodosSuccess());
    	});
    });

});