import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoItem from './Item';

configure({ adapter: new Adapter() });

const props = {
    item: {
        _id: 1,
        text: 'Item one',
        done: false
    },
    onToggleDone: jest.fn()
};

const wrapper = mount(<TodoItem { ...props }/>);

describe('Todo item component', () => {

    it('Should render todo item with correct text', () => {
        expect( wrapper.find(TodoItem).text() ).toBe('Item one');
    });

    it('Should call onToggleDone when clicked', () => {
        expect(props.onToggleDone.mock.calls.length).toBe(0);

        wrapper.find(TodoItem).simulate('click');

        expect( props.onToggleDone.mock.calls.length ).toBe(1);
    });
});
