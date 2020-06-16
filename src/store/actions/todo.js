import * as actionTypes from './actionTypes';
import { v4 as uuid } from 'uuid';
import todoStatus from '../../constants/todoStatus';
import * as actions from './index';
import formatDate from '../../utilities/dateFormatter';

export const addTodo = (text) => {
    const todo = {
        id: uuid(),
        text: text,
        status: todoStatus.PENDING,
        createdAt: Date.now(),
        formatedDate: formatDate(new Date())
    };

    return dispatch => {
        dispatch({ type: actionTypes.ADD_TODO, payload: todo });
        dispatch(actions.requestToast("Task Successfully added"));
    }
};

export const removeTodo = (id) => {
    return (dispatch, getState) => {
        const { todo: { todos } } = getState();
        const todoIndex = todos.findIndex(todo => todo.id === id);
        todos.splice(todoIndex, 1);
        dispatch({ type: actionTypes.DELETE_TODO, payload: todos });
    };
}

export const modifyTodoStatus = (id, status) => {
    return (dispatch, getState) => {
        const { todo: { todos } } = getState();
        const todoIndex = todos.findIndex(todo => todo.id === id);
        todos[todoIndex]['status'] = status;
        dispatch({ type: actionTypes.MODIFY_TODO_STATUS, payload: todos });
    }
}