import React from 'react';
import styles from './Input.module.scss';

function Input(props) {
    return (
        <div>
            <input 
                className={styles.input}
                type={props.type} 
                value={props.value} 
                placeholder={props.placeHolder} 
                onChange={(e) => props.changeHandler(e, props.field)} 
            />
            {props.error && <p style={{ textAlign: 'center', color: 'red' }}>{props.error}</p>}
        </div>
    );
}

export default Input;