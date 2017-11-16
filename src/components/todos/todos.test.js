import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mountWithIntl } from '../../../test/intl-enzyme-test-uitl.js';

import { Todos } from './Todos';
import TodoFilter from './todoFilter/TodoFilter';
import TodoList from './todoList/TodoList';
import TodoForm from './todoForm/TodoForm';

configure({ adapter: new Adapter() });

const props = {
    listItems: [],
    filter: 'ACTIVE',
    fetchData: jest.fn(),
    addTodo: jest.fn(),
    updateDoneStatus: jest.fn(),
    history: {}
};

const wrapper = mountWithIntl(
    <Todos { ...props }/>
  );

describe('Todos component', () => {

    describe('Child components render', function() {

        it('Should render TodoForm component', () => {
            expect( wrapper.find(TodoForm).length ).toBe(1);
        });

        it('Should render TodoFilter component', () => {
            expect( wrapper.find(TodoFilter).length ).toBe(1);
        });

        it('Should render TodoList component', () => {
            expect( wrapper.find(TodoList).length ).toBe(1);
        });

    });



    // it('Should call onToggleDone when clicked', () => {
    //     expect(props.onToggleDone.mock.calls.length).toBe(0);

    //     wrapper.find(Todos).simulate('click');

    //     expect( props.onToggleDone.mock.calls.length ).toBe(1);
    // });
});
