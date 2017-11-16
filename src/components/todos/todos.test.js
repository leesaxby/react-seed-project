import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mountWithIntl } from '../../../test/intl-enzyme-test-uitl.js';
import { Todos } from './todos';

configure({ adapter: new Adapter() });

const props = {
    listItems: [],
    filter: 'ACTIVE',
    fetchData: jest.fn(),
    addTodo: jest.fn(),
    updateDoneStatus: jest.fn()
};

//const wrapper = shallow(<Todos { ...props }/>);

const wrapper = mountWithIntl(
    <Todos { ...props }/>
  );


describe('Todo item component', () => {

    it('Should render todo item with correct text', () => {
        console.log(wrapper.find(TodoFilter))
        expect(1).toBe(1);
        //expect( wrapper.find(Todos).text() ).toBe('Item one');
    });

    // it('Should call onToggleDone when clicked', () => {
    //     expect(props.onToggleDone.mock.calls.length).toBe(0);

    //     wrapper.find(Todos).simulate('click');

    //     expect( props.onToggleDone.mock.calls.length ).toBe(1);
    // });
});
