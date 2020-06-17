import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TodoAction from '../../store/Todo/TodoAction';
import styles from './AddTodo.module.scss';
import Input from '../UI/Input/Input';


function AddTodo(props) {
    const [text, setText] = useState('');
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const addTodo = (todoText) => {
        todoText = text.trim();
        if (!text)
            return setError('Invalid Input');

        dispatch(TodoAction.addTodo(todoText, "Task Successfully added"));
        props.history.push('/'); // Redirect to base path
    }

    return (
        <div className={styles.container}>
            <Input 
                type="text"
                placeHolder="Create a New Task"
                value={text}
                changeHandler={({ target }) => setText(target.value)}
                error={error}
            />
            <button 
                style={{ marginTop: '1rem'}} 
                onClick={() => addTodo(text)}
            >
                Add Todo
            </button>
        </div>
    );
}

export default AddTodo;