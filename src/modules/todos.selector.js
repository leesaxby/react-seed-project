import { createSelector } from 'reselect';

const getFilter = ({ todos: { filter } }) => filter;
const getList = ({ todos: { listItems } }) => listItems;

const filterTodos = createSelector (
    [getFilter, getList],
    (filter, list) => list.filter(({ done }) => filter === 'DONE' ? done : !done)
);

export {
    filterTodos,
};