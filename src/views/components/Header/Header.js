import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthAction from '../../../store/Auth/AuthAction';
import { Link } from 'react-router-dom';
import navItems from './navItemConfig';
import NavItem from './NavItem/NavItem';
import styles from './Header.module.scss';

function Header() {
    const [showDropDown, setDropDown] = useState(false);
    const userRole = useSelector(state => state.userDetails.role);
    const dispatch = useDispatch();

    let dropDownClasses = [styles.dropdown]
    if (!showDropDown) {
        dropDownClasses = [styles.show];
    }

    const _onClick = () => setDropDown(!showDropDown);
    const navigation = navItems(userRole).map(item => <NavItem key={item.route} config={item} />);

    return (
        <header className={styles.container}>
            {navigation}
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