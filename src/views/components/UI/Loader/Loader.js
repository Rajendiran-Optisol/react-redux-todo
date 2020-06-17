import React from 'react';
// import { useSelector } from 'react-redux';
import styles from './Loader.module.scss';

function Loader() {
    // const { isLoading } = useSelector(store => store.loader);
    return (false && <div className={`${styles["lds-ripple"]}`}></div>);
}

export default Loader;