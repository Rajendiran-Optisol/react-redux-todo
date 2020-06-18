import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './App.scss';

import AuthAction from './store/Auth/AuthAction';

import Login from './views/Login/Login';
import Profile from './views/components/Profile/Profile';
import SignUp from './views/SignUp/SignUp';
import Layout from './views/hoc/Layout/Layout';
import Todos from './views/containers/Todos/Todos';
import Toast from './views/components/UI/Toast/Toast';
import Loader from './views/components/UI/Loader/Loader';
const AddTodo = lazy(() => import('./views/components/AddTodo/AddTodo'));
const ModifyStatus = lazy(() => import('./views/components/ModifyStatus/ModifyStatus'));

function App(props) {
  const isAuthenticated = useSelector(store => store.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AuthAction.isAuthenticated(props.history));
  }, [dispatch, props.history]);

  let wrapper = null;
  if (!isAuthenticated) {
    wrapper = (
      <Switch>
        <Route path="/sign-up" component={SignUp} />
        <Route path="/login" component={Login} />
      </Switch>);
  }
  else {
    wrapper = <Layout>
                <Suspense fallback={<p>Loading...</p>}>
                    <Switch>
                        <Route path="/profile" component={Profile} />
                        <Route path="/create-tasks" component={AddTodo} />
                        <Route path="/modify-status" component={ModifyStatus} />
                        <Route path="/" component={Todos} />
                    </Switch>
                </Suspense>
              </Layout>;
  }

  return (
    <BrowserRouter>
      <Toast />
      <Loader />
      {wrapper}
    </BrowserRouter>
  );
}

export default App;
