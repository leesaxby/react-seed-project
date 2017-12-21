import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import reducer, { fetchTodos, FETCH_TODOS_SUCCESS, ADD_TODO } from './todos';

describe('The Todos module', () => {

    describe('has an action creator which', () => {

        const mockStore = configureMockStore([ thunk ]);

        it('adds a todo');
        it('updates the status of a todo');
        it('fetches todos, and gives notice of their arrival', () => {
            const expectedActions = [{
                type: FETCH_TODOS_SUCCESS,
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
        it('changes the filter');
    });

    describe('has a reducer which', () => {

        const initialState = { filter: 'ACTIVE', listItems: [] };

        it('should return the initial state', () => {
            expect(
                reducer(undefined, {})
            ).toEqual(
                initialState
            );
        });
        it('should handle ADD_TODO', () => {
            expect(reducer(initialState, {
                    type: ADD_TODO,
                    payload: {
                        text: 'New item',
                        done: false
                    }
                })
            ).toEqual({
                    filter: 'ACTIVE',
                    listItems: [{
                        _id: 0,
                        text: 'New item',
                        done: false
                    }]
                }
            );
        });
        it('should handle FETCH_TODOS_SUCCESS');
        it('should handle UPDATE_DONE_STATUS');
        it('should handle CHANGE_FILTER');
    });
});