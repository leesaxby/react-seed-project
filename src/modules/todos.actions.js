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
