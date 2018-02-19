import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import renderer from 'react-test-renderer';

import TodosContainer, { Todos } from './Todos';
import { fetchTodosSuccess } from 'Modules/todos';

// Mock the nested "connected" components to avoid error with missing store.
jest.mock('./todos/InputRow', () => 'InputRow');
jest.mock('./todos/listRow/List', () => 'List');

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

    it('renders component', () => {
    	const { props } = setup();
		const tree = renderer.create(
			<Todos { ...props } />
		).toJSON();

		expect(tree).toMatchSnapshot();
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

	it('renders component', () => {
		const { store } = setup();

		const tree = renderer.create(
			<TodosContainer store={store} />
		).toJSON();

		expect(tree).toMatchSnapshot();
	});

    it('dispatches the right actions from Todos props', () => {
    	const { store, wrapper } = setup();

    	store.clearActions();
    	wrapper.prop('fetchData')().then(() => {
    		expect(store.getActions()[0]).toEqual(fetchTodosSuccess());
    	});
    });

});