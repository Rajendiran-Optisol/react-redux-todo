import React from 'react';
import { useSelector } from 'react-redux';
import Backdrop from '../Backdrop/Backdrop';
import styles from './Loader.module.scss';

function Loader() {
    const { isLoading } = useSelector(store => store.loader);
    return ((isLoading) &&
        (<div>
            <Backdrop  />
            <div className={`${styles["lds-ripple"]}`}>
                <div></div>
                <div></div>
            </div>
        </div>));
}

export default Loader;