import { todos as reducer } from './todos.reducers.js';

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

