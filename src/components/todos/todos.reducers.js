const initialState = {
    listItems: []
};

export function todos(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO': {
            const ids = state.listItems.map(todo => todo._id);
            action.payload._id = Math.max(...ids) + 1;

            return {
                listItems: [...state.listItems, action.payload],
                filter: state.filter
            };
        }
        case 'FETCH_TODOS_SUCCESS':
            return {
                listItems: action.payload,
                filter: state.filter

            };
        case 'UPDATE_DONE_STATUS':
            {
                const listItems = Object.assign(state.listItems);
                listItems.find(({ _id }) => _id === action.payload._id).done = action.payload.done;

                return {
                    listItems,
                    filter: state.filter
                };
            }
        default:
            return state;
    }
}