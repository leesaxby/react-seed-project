import React from 'react';
import createComponentWithIntl from '../../test/createComponentWithIntl';
import Todos from './Todos';

const todoList = [
    { id: 1, text: 'Item One', done: false },
    { id: 2, text: 'Item Two', done: false },
    { id: 3, text: 'Item Three', done: false },
];

describe('Todos', () => {
    it('Renders correctly', () => {
        const result = createComponentWithIntl(
            <Todos todoList={todoList} />,
        );
        expect(result).toMatchSnapshot();
    });

    it('Renders translations correctly', () => {
        const result = createComponentWithIntl(
            <Todos todoList={todoList} />,
            { locale: 'de' },
        );
        expect(result).toMatchSnapshot();
    });
});
