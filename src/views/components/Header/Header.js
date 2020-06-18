import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AuthAction from '../../../store/Auth/AuthAction';
import { NavLink, Link } from 'react-router-dom';

import styles from './Header.module.scss';

function Header() {
    const [showDropDown, setDropDown] = useState(false);
    const dispatch = useDispatch();

    let dropDownClasses = [styles.dropdown]
    if (!showDropDown) {
        dropDownClasses = [styles.show];
    }

    const _onClick = () => setDropDown(!showDropDown)

    return (
        <header className={styles.container}>
            <NavLink exact to="/">
                Todos
            </NavLink>
            <NavLink exact to="/create-tasks">
                Create Tasks
            </NavLink>
            <NavLink exact to="/modify-status">
                Modify Status
            </NavLink>
            <div className={styles.profile}>
                <div className={styles.profileIcon}>
                    <div className={styles.profilePic} onClick={_onClick}>R</div>
                    <span>Profile</span>
                    <div className={dropDownClasses.join(' ')} onClick={_onClick}>
                        <Link to="/profile">Profile</Link>
                        <a href="#" onClick={()=> dispatch(AuthAction.logout())}>Logout</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;