import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import { ListGroup } from 'react-bootstrap';
import ListContainer, { List } from './List';
import Item from './list/Item';
import { updateDoneStatus } from 'Modules/todos';

describe('A List', () => {

	function setup() {
		const props = {
		    listItems: [{
		    	_id: 1,
		    	done: true
		    }, {
		    	_id: 2,
		    	done: false
		    }],
		    onItemClick: jest.fn()
		};
		const wrapper = shallow(<List { ...props }/>);
	    return {
	        props,
	        wrapper
	    };
	}

	it('renders a list of Items', () => {
		const { props, wrapper } = setup();

		const listGroup = wrapper.find(ListGroup).first();
		expect(listGroup.exists()).toBe(true);
		expect(listGroup.children()).toHaveLength(2);

		const firstItem = listGroup.childAt(0);
		const secondItem = listGroup.childAt(1);
		expect(firstItem.is(Item)).toBe(true);
		expect(firstItem.prop('item')).toBe(props.listItems[0]);

		expect(firstItem.is(Item)).toBe(true);
		expect(secondItem.prop('item')).toBe(props.listItems[1]);
	});

	it('triggers a callback when an Item is clicked', () => {
		const { props, wrapper } = setup();

        expect(props.onItemClick.mock.calls).toHaveLength(0);

        wrapper.find(Item).at(0).simulate('click');
        expect(props.onItemClick.mock.calls).toHaveLength(1);

        wrapper.find(Item).at(1).simulate('click');
        expect(props.onItemClick.mock.calls).toHaveLength(2);
	});
});

describe('A List Container', () => {

	function setup() {
		const initialState = { 
			todos: { 
				filter: 'ACTIVE', 
				listItems: [{ 
					_id: 1, 
					done: true 
				}, {
					_id: 2,
					done: false
				}] 
			} 
		};
		const store = configureStore()(initialState);

		const wrapper = shallow(<ListContainer store={store} />);

		return {
			initialState,
			store,
			wrapper
		};
	}

	it('renders without throwing an error', () => {
		const { wrapper } = setup();
		expect(wrapper.exists()).toBe(true);
	});

	it('maps the right portion of the state to List props', () => {
		const { wrapper, initialState } = setup();

		expect(wrapper.find(List).prop('listItems')).toEqual(initialState.todos.listItems.filter((item) => !item.done));
	});

	it('correctly filters todos depending on the filter state', () => {
		const { initialState } = setup();
		const newState = {
			todos: {
				filter: 'DONE',
				listItems: initialState.todos.listItems
			}
		};
		const store = configureStore()(newState);
		const wrapper = shallow(<ListContainer store={store} />);
		expect(wrapper.find(List).prop('listItems')).toEqual(initialState.todos.listItems.filter((item) => item.done));
	});

	it('dispatches the right actions from List props', () => {
		const { wrapper, initialState, store } = setup();

		expect(store.getActions()).toHaveLength(0);

		const clickedItem = initialState.todos.listItems[0];

		wrapper.prop('onItemClick')(clickedItem);

		expect(store.getActions()).toHaveLength(1);
		expect(store.getActions()[0]).toEqual(updateDoneStatus(clickedItem._id, !clickedItem.done));
	});

});