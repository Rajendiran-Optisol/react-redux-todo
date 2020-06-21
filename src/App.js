import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import AuthAction from './store/Auth/AuthAction';
import UserDetailsAction from './store/UserDetails/UserDetailsAction';
import Toast from './views/components/UI/Toast/Toast';
import Loader from './views/components/UI/Loader/Loader';
import Routes from './routes/';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './App.scss';

function App(props) {
  const dispatch = useDispatch();
  const isAuth = useCallback(async () => {
    dispatch(AuthAction.isAuthenticated(props.history));
    await dispatch(UserDetailsAction.fetchUserDetails());
  }, [dispatch, props.history]);

  useEffect(() => {
    localStorage.getItem('token') && isAuth(props);
  }, [isAuth, props]);

  return (
    <>
      <Toast />
      <Loader />
      <Routes {...props} />
    </>
  );
}

export default App;
