import React from 'react';
import { Link } from 'react-router-dom';
import getIconClass from '../../utilities/getTaskIconClass';
import style from './ListTodos.module.scss';
import todoStatus from '../../constants/todoStatus';

function ListTodos(props) {
    let todos = <h2 
                    className={style.noTodos}>
                    Click 
                    <Link to="/create-tasks">
                        <span className={style.naviagtionLink}> here</span>
                    </Link> to create tasks
                </h2>;

    if (props.todos.length) {
        // Group Todos by Date
        let newTodos = props.todos.reduce((acc, inc) => {
            if(acc[inc.formatedDate]) {
               acc[inc.formatedDate].push(inc) ;
               return acc;
            }
            else 
                return { [inc.formatedDate]: [inc] };
        }, {});

        todos = Object.entries(newTodos).map(
                    ([key, todoss]) => (
                        <div key={key}>
                            <h3 
                                style={{ 
                                    marginTop: '1rem', 
                                    color: "#339933", 
                                    fontSize: "1rem"
                                }}>
                                    {new Date(todoss[0].createdAt).toDateString()}
                            </h3>
                            <ul>
                            {
                                todoss.map(todo => (
                                    <li 
                                        key={todo.id} 
                                        className={style.listTodo}>
                                            <i 
                                                className={`fa ${getIconClass(todo.status)}`} 
                                                aria-hidden="true">
                                            </i>
                                            <span 
                                                className={`${style.todoText} ${todo.status === todoStatus.FINISHED ? style.overLine : ''}`}>
                                                {todo.text}
                                            </span>
                                            <span 
                                                className={style.todoStatus}>
                                                    ({todo.status})
                                            </span>
                                    </li>
                                ) )   
                            }
                            </ul>
                        </div>
                    )
                );
    }
    return todos;
};

export default ListTodos;