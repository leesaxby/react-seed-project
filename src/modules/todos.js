const ADD_TODO = 'app/todos/ADD_TODO';
const FETCH_TODOS_SUCCESS = 'app/todos/FETCH_TODOS_SUCCESS';
const UPDATE_DONE_STATUS = 'app/todos/UPDATE_DONE_STATUS';

const addTodo = (todo) => ({ 
    type: ADD_TODO, 
    payload: todo 
});

const updateDoneStatus = (_id, doneStatus) => ({ 
    type: UPDATE_DONE_STATUS, 
    payload: { _id, doneStatus } 
});

const fetchTodosSuccess = () => ({
    type: FETCH_TODOS_SUCCESS,
    payload: [
        { _id: 1, text: 'Item One', done: false},
        { _id: 2, text: 'Item Two', done: false},
        { _id: 3, text: 'Item Three', done: false}
    ]
});

const fetchTodos = () => dispatch => Promise.resolve().then(() => dispatch(fetchTodosSuccess()));

export {
    ADD_TODO,
    FETCH_TODOS_SUCCESS,
    UPDATE_DONE_STATUS,
    addTodo,
    updateDoneStatus,
    fetchTodos
};

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