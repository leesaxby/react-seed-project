import { ADD_TODO, FETCH_TODOS_SUCCESS, UPDATE_DONE_STATUS } from './todos.actions';

const initialState = {
    listItems: []
};

export function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            const ids = state.listItems.map(todo => todo._id);

            action.payload._id = ids.length ? Math.max(...ids) + 1 : 0;

            return {
                listItems: [...state.listItems, action.payload]
            };
        }
        case FETCH_TODOS_SUCCESS:
            return {
                listItems: action.payload

            };
        case UPDATE_DONE_STATUS:
            {
                const listItems = Object.assign(state.listItems);
                listItems.find(({ _id }) => _id === action.payload._id).done = action.payload.done;

                return {
                    listItems
                };
            }
        default:
            return state;
    }
}