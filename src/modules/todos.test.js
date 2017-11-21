import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchTodos } from './todos.js';

const mockStore = configureMockStore([ thunk ]);

describe('Todo actions', () => {

    it('Creates FETCH_TODOS_SUCCESS action after successfully fetching todos', function () {
        const expectedActions = [{
            type: 'FETCH_TODOS_SUCCESS',
            payload: [
                { _id: 1, text: 'Item One', done: false},
                { _id: 2, text: 'Item Two', done: false},
                { _id: 3, text: 'Item Three', done: false}
            ]
        }];

        const store = mockStore({ todos: [] });

        // An actual async fetch request will need to be mocked here using a library like fetch-mock.
        return store.dispatch( fetchTodos() ).then(() => {
            expect( store.getActions() ).toEqual(expectedActions);
        });
    });

});

import { todos as reducer } from './todos.js';

const initialState = { listItems: [] };

describe('Todos reducer', () => {

    it('Should return initial state', () => {
        const expected = reducer(undefined, {});

        expect(expected).toEqual(initialState);
    });

    it('Should add todo item', () => {
        const actual = reducer(initialState, {
            type: 'ADD_TODO',
            payload: {
                text: 'New item',
                done: false
            }
        });

        const expected = {
            listItems: [{
                _id: 0,
                text: 'New item',
                done: false
            }]
        };

        expect(actual).toEqual(expected);
    });

});

