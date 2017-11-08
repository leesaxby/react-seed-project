export function addTodo(todo) {
    return dispatch => {
        dispatch({
            type: 'ADD_TODO',
            payload: todo
        });
    };
}

export function fetchTodos() {
    return dispatch => {
        dispatch({
            type: 'FETCH_TODOS_SUCCESS',
            payload: [
                { _id: 1, text: 'Item One', done: false},
                { _id: 2, text: 'Item Two', done: false},
                { _id: 3, text: 'Item Three', done: false}
            ]
        });
    };
}

export function updateDoneStatus(id, doneStatus) {
    return dispatch => {
        dispatch({
            type: 'UPDATE_DONE_STATUS',
            payload: { _id: id, done: !doneStatus }
        });
    };
}