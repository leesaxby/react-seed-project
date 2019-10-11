import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { IntlProvider } from 'react-intl';
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

    describe('Integration', () => {
        it('Can show done items', () => {
            const { getByText, queryAllByTestId, getByTestId } = render(
                <IntlProvider>
                    <Todos todoList={todoList} />
                </IntlProvider>,
            );

            expect(queryAllByTestId('todo-item').length).toBe(3);
            getByText('Item One').click();
            expect(queryAllByTestId('todo-item').length).toBe(2);

            getByTestId('show-done').click();
            expect(queryAllByTestId('todo-item').length).toBe(1);
        });

        it('Can add new item', () => {
            const { getByText, queryAllByTestId, getByTestId } = render(
                <IntlProvider>
                    <Todos todoList={todoList} />
                </IntlProvider>,
            );

            expect(queryAllByTestId('todo-item').length).toBe(3);

            fireEvent.change(getByTestId('todo-add-item'), { target: { value: 'Item Four' } });
            fireEvent.submit(getByTestId('form'));

            expect(queryAllByTestId('todo-item').length).toBe(4);
            getByText('Item Four');
        });
    });
});
