import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import reducer, * as actions from './todos';

describe('The Todos module', () => {

    describe('has an action creator which', () => {
        const mockStore = configureMockStore([ thunk ]);

        it('adds a todo', () => {
            const todo = {
                _id: 5,
                text: 'A New Todo',
                done: false,
            };
            const expectedAction = {
                type: actions.ADD_TODO,
                payload: todo,
            };
            expect(actions.addTodo(todo)).toEqual(expectedAction);
        });
        it('updates the status of a todo', () => {
            const _id = 1;
            const doneStatus = true;
            const expectedAction = {
                type: actions.UPDATE_DONE_STATUS,
                payload: {
                    _id,
                    doneStatus,
                },
            };
            expect(actions.updateDoneStatus(_id, doneStatus)).toEqual(expectedAction);
        });
        it('fetches todos, and gives notice of their arrival', () => {
            const expectedActions = [{
                type: actions.FETCH_TODOS_SUCCESS,
                payload: [
                    { _id: 1, text: 'Item One', done: false},
                    { _id: 2, text: 'Item Two', done: false},
                    { _id: 3, text: 'Item Three', done: false},
                ],
            }];

            const store = mockStore({ todos: [] });

            // TODO An actual async fetch request will need to be mocked here using a library like fetch-mock.
            return store.dispatch( actions.fetchTodos() ).then(() => {
                expect( store.getActions() ).toEqual(expectedActions);
            });
        });
        it('changes the filter', () => {
            const filter = 'DONE';
            const expectedAction = {
                type: actions.CHANGE_FILTER,
                payload: filter,
            };
            expect(actions.changeFilter(filter)).toEqual(expectedAction);
        });
    });

    describe('has a reducer which', () => {

        const initialState = { filter: 'ACTIVE', listItems: [] };

        it('returns the initial state', () => {
            expect(
                reducer(undefined, {})
            ).toEqual(
                initialState
            );
        });
        it('handles ADD_TODO', () => {
            expect(reducer(initialState, {
                    type: actions.ADD_TODO,
                    payload: {
                        text: 'New item',
                        done: false,
                    },
                })
            ).toEqual({
                    filter: 'ACTIVE',
                    listItems: [{
                        _id: 0,
                        text: 'New item',
                        done: false,
                    }],
                }
            );
        });
        it('handles FETCH_TODOS_SUCCESS', () => {
            const payload = [
                { _id: 1, text: 'Item One', done: false },
            ];
            expect(reducer(initialState, {
                    type: actions.FETCH_TODOS_SUCCESS,
                    payload,
                })
            ).toEqual({
                filter: initialState.filter,
                listItems: payload,
            });
        });
        it('handles UPDATE_DONE_STATUS', () => {
            expect(reducer({
                    filter: initialState.filter,
                    listItems: [{
                        _id: 1,
                        text: 'An Item',
                        done: false,
                    }],
                }, {
                    type: actions.UPDATE_DONE_STATUS,
                    payload: {
                        _id: 1,
                        doneStatus: true,
                    },
                })
            ).toEqual({
                filter: initialState.filter,
                listItems: [{
                    _id: 1,
                    text: 'An Item',
                    done: true,
                }],
            });
        });
        it('handles CHANGE_FILTER', () => {
            expect(reducer(initialState, {
                    type: actions.CHANGE_FILTER,
                    payload: 'DONE',
                })
            ).toEqual({
                filter: 'DONE',
                listItems: initialState.listItems,
            });
        });
        it('returns an unmodified state when it is fed an irrelevant action', () => {
            expect(reducer(initialState, {
                    type: 'IRRELEVANT_TEST_ACTION',
                })
            ).toEqual(
                initialState
            );
        });
    });
});