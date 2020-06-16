import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

function Header() {
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
        </header>
    );
}

export default Header;