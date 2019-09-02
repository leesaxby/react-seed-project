import { LOCATION_CHANGE } from 'connected-react-router';

const ADD_TODO = 'app/todos/ADD_TODO';
const FETCH_TODOS_SUCCESS = 'app/todos/FETCH_TODOS_SUCCESS';
const UPDATE_DONE_STATUS = 'app/todos/UPDATE_DONE_STATUS';

const addNewTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo,
});

const updateDoneStatus = (id, doneStatus) => ({
    type: UPDATE_DONE_STATUS,
    payload: { id, doneStatus },
});

const fetchTodosSuccess = () => ({
    type: FETCH_TODOS_SUCCESS,
    payload: [
        { id: 1, text: 'Item One', done: false },
        { id: 2, text: 'Item Two', done: false },
        { id: 3, text: 'Item Three', done: false },
    ],
});

const fetchTodos = () => (dispatch) => Promise.resolve().then(() => dispatch(fetchTodosSuccess()));

export {
    ADD_TODO,
    FETCH_TODOS_SUCCESS,
    UPDATE_DONE_STATUS,
    addNewTodo,
    updateDoneStatus,
    fetchTodos,
    fetchTodosSuccess,
};

const initialState = {
    listItems: [],
    filter: 'ACTIVE',
};

const todo = (state, action) => {
    switch (action.type) {
        case ADD_TODO: {
            const ids = state.listItems.map((item) => item.id);
            const newId = ids.length ? Math.max(...ids) + 1 : 0;
            return { ...action.payload, id: newId };
        }
        case UPDATE_DONE_STATUS: {
            const listItems = Object.assign(state.listItems);
            const itemIndex = listItems.findIndex(({ id }) => id === action.payload.id);
            const newListItem = { ...listItems[itemIndex], done: action.payload.doneStatus };

            return { [itemIndex]: newListItem };
        }
        default:
            return state;
    }
};

export default function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            return {
                ...state,
                listItems: [
                    ...state.listItems,
                    todo(state, action),
                ],
            };
        }
        case FETCH_TODOS_SUCCESS: {
            return { ...state, listItems: action.payload };
        }
        case UPDATE_DONE_STATUS: {
            return { ...state, listItems: Object.assign([], state.listItems, todo(state, action)) };
        }
        case LOCATION_CHANGE: {
            const filterPath = action.payload.location.pathname.slice(1);
            return { ...state, filter: filterPath === 'DONE' ? 'DONE' : 'ACTIVE' };
        }
        default:
            return state;
    }
}
