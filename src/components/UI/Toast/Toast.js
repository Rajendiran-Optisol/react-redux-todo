import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../store/actions/';
import styles from './Toast.module.scss';

function Toast() {
    const toast = useSelector(state => state.toast);
    const dispatch = useDispatch();

    const closeHandler = () => {
        dispatch(actions.closeToast());
    }

    let message = null;
    if (toast.isEnable) {
        message = (
            <div className={styles.container}>
                <div className={styles.messageToast}>
                    <span>{toast.message}</span>
                    <span onClick={() => closeHandler()} className={styles.closeToast}>X</span>
                </div>
            </div>
        );
    }

    return message;
}

export default Toast;