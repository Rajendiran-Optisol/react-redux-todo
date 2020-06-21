import { TodoReducer } from './TodoReducer';
import { v4 as uuid } from 'uuid';
import todoStatus from '../../constants/todoStatus';
import ToastAction from '../Toast/ToastAction';
import formatDate from '../../utilities/dateFormatter';
import HttpUtil from '../../utilities/HttpUtility/HttpHandler';
import HttpError from '../../utilities/HttpUtility/HttpError';
import { TodoService } from '../../utilities/HttpUtility/ServiceInstance';

import ApiAction from '../../utilities/ApiAction';

const TodoAction = {
    addTodo: (text) => {
        const todo = {
            id: uuid(),
            text: text,
            status: todoStatus.PENDING,
            createdAt: Date.now(),
            formatedDate: formatDate(new Date())
        };

        return async dispatch => {
            const url = '/add-todo';
            const response = await ApiAction.makeEffect(dispatch, HttpUtil.post, [url, TodoService, { data: todo }]);
            if (response instanceof HttpError)
                return dispatch(ToastAction.requestToast({ message: response.message, color: 'DANGER' }));

            dispatch(ToastAction.requestToast({ message: response.data.message, color: 'SUCCESS' }));
        }
    },

    fetchTodos: () => {
        return async dispatch => {
            const url = '/';
            const response = await ApiAction.makeEffect(dispatch, HttpUtil.get, [url, TodoService]);
            if (response instanceof HttpError)
                return dispatch(ToastAction.requestToast({ message: response.message, color: 'DANGER' }));

            dispatch({ type: TodoReducer.FETCH_TODOS, payload: response.data.data });
        };
    },

    removeTodo: (id) => {
        return async dispatch => {
            const url = '/remove-todo';
            await ApiAction.makeEffect(dispatch, HttpUtil.delete, [url, TodoService, { data: { id } }]);
            dispatch(TodoAction.fetchTodos());
        };
    },

    modifyTodoStatus: (id, status) => {
        return async dispatch => {
            const url = '/modify-todo-status';
            const response = await ApiAction.makeEffect(dispatch, HttpUtil.put, [url, TodoService, { data: { id, status } }]);
            dispatch(ToastAction.requestToast({ message: response.data.message, color: 'SUCCESS' }));
            dispatch(TodoAction.fetchTodos());
        }
    },

    fetchTodoByUsers: () => {
        return async dispatch => {
            const url = '/list-todo-by-users';
            const response = await ApiAction.makeEffect(dispatch, HttpUtil.get, [url, TodoService]);
            dispatch(ToastAction.requestToast({ message: response.data.message, color: 'SUCCESS' }));
            dispatch({ type: TodoReducer.FETCH_USER_TODOS, payload: response.data.data });
        }
    }
}

export default TodoAction;