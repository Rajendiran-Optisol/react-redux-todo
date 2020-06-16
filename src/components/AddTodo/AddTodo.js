import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/actions/';
import styles from './AddTodo.module.scss';


function AddTodo(props) {
    const [text, setText] = useState('');
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const addTodo = (todoText) => {
        todoText = text.trim();
        if (!text)
            return setError('Invalid Input');

        dispatch(actions.addTodo(todoText, "Task Successfully added"));
        props.history.push('/'); // Redirect to base path
    }

    return (
        <div className={styles.container}>
            <div>
                <input 
                    type="text" 
                    placeholder="Create a new task" 
                    value={text} 
                    onChange={({ target }) => setText(target.value)} 
                />
                {error && <p 
                            style={{ 
                                textAlign: 'center', 
                                color: 'red'
                            }}
                          >
                                {error}
                          </p>}
            </div>
            <br />
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