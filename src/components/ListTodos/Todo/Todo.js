import React from 'react';
import getIconClass from '../../../utilities/getTaskIconClass';
import todoStatus from '../../../constants/todoStatus';
import style from './Todo.module.scss';

function Todo(props) {
    return (
        <>
            <i className={`fa ${getIconClass(props.todo.status)}`} aria-hidden="true"></i>
            <span 
                className={`${style.todoText} ${props.todo.status === todoStatus.FINISHED ? style.overLine : ''}`}>
                {props.todo.text}
            </span>
            <span 
                className={style.todoStatus}>
                    ({props.todo.status})
            </span>
        </>
    );
}

export default Todo;