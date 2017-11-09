import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchTodos } from './todos.actions.js';

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