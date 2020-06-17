import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoAction from '../../../store/Todo/TodoAction';
import { todoSelector } from '../../../selectors/todoSelector';
import todoStatus from '../../../constants/todoStatus';
import getIconClass from '../../../utilities/getTaskIconClass';
import style from './ModifyStatus.module.scss';


function ModifyStatus() {
    let { todos } = useSelector(todoSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(TodoAction.fetchTodos());
    }, [dispatch]);

    let todosList = <h3 className={style.noTask}>Please create tasks</h3>;

    if (todos.length) {
        todosList = (
            <ul>
                {
                    todos.map(todo => (
                        <li 
                            key={todo.id} 
                            className={style.listTodo}>
                                <div className={style.textArea}>
                                    <i 
                                        className={`fa ${getIconClass(todo.status)}`} 
                                        aria-hidden="true">
                                    </i>
                                    <span className={style.todoText}>{todo.text}</span>
                                </div>
                                <div className={style.dropdownArea}>
                                    <select 
                                        className={style.dropdown} 
                                        disabled={todo.status === todoStatus.FINISHED} 
                                        value={todo.status} 
                                        onChange={({ target }) => dispatch(TodoAction.modifyTodoStatus(todo.id, target.value))}>
                                        {
                                            Object.keys(todoStatus)
                                                    .map(status => <option 
                                                                    key={status} 
                                                                    value={status}>
                                                                        {status}
                                                                    </option>
                                                        )
                                        }
                                    </select>
                                </div>
                                {todo.status === todoStatus.FINISHED && 
                                                <button 
                                                    onClick={() => dispatch(TodoAction.removeTodo(todo.id))} 
                                                    className={style.btnDanger}>
                                                        Delete
                                                </button>}
                        </li>
                    ))
                }
            </ul>
        );
    }

    return (
        <div className={style.container}>
            {todosList}
        </div>
    );
}

export default ModifyStatus;