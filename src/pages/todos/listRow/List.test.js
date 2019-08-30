import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

import ListContainer, { TodoList } from './List';
import Item from './list/Item';

describe('A List', () => {
    const setup = () => {
        const props = {
            listItems: [{
                id: 1,
                done: true,
            }, {
                id: 2,
                done: false,
            }],
            onItemClick: jest.fn(),
        };
        const wrapper = shallow(<TodoList {...props} />);
        return {
            props,
            wrapper,
        };
    };

    it('renders component', () => {
        const { props } = setup();
        const tree = renderer.create(
            <TodoList {...props} />,
        ).toJSON();

        expect(tree).toMatchSnapshot();
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
    const setup = () => {
        const initialState = {
            todos: {
                filter: 'ACTIVE',
                listItems: [{
                    id: 1,
                    done: true,
                }, {
                    id: 2,
                    done: false,
                }],
            },
        };
        const store = configureStore()(initialState);

        const wrapper = shallow(<ListContainer store={store} />);

        return {
            initialState,
            store,
            wrapper,
        };
    };

    it('renders component', () => {
        const { store } = setup();
        const tree = renderer.create(
            <ListContainer store={store} />,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('correctly filters todos depending on the filter state', () => {
        const { initialState } = setup();
        const newState = {
            todos: {
                filter: 'DONE',
                listItems: initialState.todos.listItems,
            },
        };
        const store = configureStore()(newState);

        const tree = renderer.create(
            <ListContainer store={store} />,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('maps the right portion of the state to List props', () => {
        const { wrapper, initialState } = setup();

        expect(wrapper.find(TodoList).prop('listItems')).toEqual(initialState.todos.listItems.filter(item => !item.done));
    });
});
