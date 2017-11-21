import { ADD_TODO, FETCH_TODOS_SUCCESS, UPDATE_DONE_STATUS } from './todos.actions';

const initialState = {
    listItems: []
};

export function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            const ids = state.listItems.map(todo => todo._id);
            const newId = ids.length ? Math.max(...ids) + 1 : 0;
            return {
                listItems: [...state.listItems, Object.assign({}, action.payload, { _id: newId })]
            };
        }
        case FETCH_TODOS_SUCCESS:
            return {
                listItems: action.payload
            };
        case UPDATE_DONE_STATUS: {
            const listItems = Object.assign(state.listItems);
            const itemIndex = listItems.findIndex(({ _id }) => _id === action.payload._id);
            const newListItem = Object.assign({}, listItems[itemIndex], { 
                done: action.payload.doneStatus 
            });
            return {
                listItems: Object.assign([], state.listItems, { [itemIndex]: newListItem })
            };
        }
        default:
            return state;
    }
}