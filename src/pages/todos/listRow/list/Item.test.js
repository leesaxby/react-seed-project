import React from 'react';
import { mount } from 'enzyme';
import TodoItem from './Item';

const props = {
    item: {
        _id: 1,
        text: 'Item one',
        done: false
    },
    onClick: jest.fn()
};

const wrapper = mount(<TodoItem { ...props }/>);

describe('An Item ', () => {

    it('should render without throwing an error');
    it('should render a ListGroupItem containing some text');
    it('should trigger a callback when clicked');




    it('Should render todo item with correct text', () => {
        expect( wrapper.find(TodoItem).text() ).toBe('Item one');
    });

    it('Should call onClick when clicked', () => {
        expect(props.onClick.mock.calls.length).toBe(0);

        wrapper.find(TodoItem).simulate('click');

        expect( props.onClick.mock.calls.length ).toBe(1);
    });

});
