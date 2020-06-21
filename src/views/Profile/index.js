import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Profile.module.scss';
import UserDetailActions from '../../store/UserDetails/UserDetailsAction';

function Profile() {
    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.userDetails);

    useEffect(() => {
        dispatch(UserDetailActions.fetchUserDetails());
    }, [dispatch]); 

    return (
        <div className={styles.container}>
            <div className={styles.field}>
                <label>First Name</label>
                <input type="text" value={userInfo.firstName} disabled />
            </div>
            <div className={styles.field}>
                <label>Last Name</label>
                <input type="text" value={userInfo.lastName} disabled />
            </div>
            <div className={styles.field}>
                <label>Email</label>
                <input type="text" value={userInfo.email} disabled />
            </div>
        </div>
    );
}

export default Profile;
export { Profile };