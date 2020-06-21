import React from 'react';
import { NavLink } from 'react-router-dom';

function NavItem({ config }) {
    let { route, exact, title } = config;
    return (
        <NavLink exact={exact} to={route}>
            {title}
        </NavLink>
    );
}

export default NavItem;