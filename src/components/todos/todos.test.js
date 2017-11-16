import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mountWithIntl } from '../../../test/intl-enzyme-test-uitl.js';
import { renderedInWrapper } from '../../../test/utils';

import { Todos } from './Todos';
import TodoFilter from './todoFilter/TodoFilter';
import TodoList from './todoList/TodoList';
import TodoItem from './todoItem/TodoItem';
import TodoForm from './todoForm/TodoForm';

configure({ adapter: new Adapter() });

const props = {
    listItems: [
        { _id: 1, text: 'Item 1', done: true }
    ],
    filter: 'ACTIVE',
    fetchData: jest.fn(),
    addTodo: jest.fn(),
    updateDoneStatus: jest.fn(),
    history: {}
};

const wrapper = mountWithIntl(
    <Todos { ...props }/>
  );

const isRendered = renderedInWrapper(wrapper);

describe('Todos component', () => {

    describe('Child components render', () => {

        it('Should render TodoForm component', () => {
            expect( isRendered(TodoForm) ).toBe(true);
        });

        it('Should render TodoFilter component', () => {
            expect( isRendered(TodoFilter) ).toBe(true);
        });

        it('Should render TodoList component', () => {
            expect( isRendered(TodoList) ).toBe(true);
        });

        it('Should render TodoList component', () => {
            expect( isRendered(TodoItem) ).toBe(true);
        });

    });

    describe('Calls correct props', () => {

        it('Should call addTodo prop when addTodoItem method is called', () => {
            expect(props.addTodo.mock.calls.length).toBe(0);

            wrapper.instance().addTodoItem();

            expect( props.addTodo.mock.calls.length ).toBe(1);
        });

        it('Should call fetchData prop when getTodos method is called', () => {
            expect(props.fetchData.mock.calls.length).toBe(1);

            wrapper.instance().getTodos();

            expect( props.fetchData.mock.calls.length ).toBe(2);
        });

        it('Should call fetchData prop when getTodos method is called', () => {
            expect(props.fetchData.mock.calls.length).toBe(1);

            wrapper.instance().getTodos();

            expect( props.fetchData.mock.calls.length ).toBe(2);
        });

    });

});
