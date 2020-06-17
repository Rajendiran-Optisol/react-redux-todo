import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './App.scss';

import Layout from './views/hoc/Layout/Layout';
import Todos from './views/Todos/Todos';
import Toast from './views/components/UI/Toast/Toast';
import Loader from './views/components/UI/Loader/Loader';
const AddTodo = lazy(() => import('./views/components/AddTodo/AddTodo'));
const ModifyStatus = lazy(() => import('./views/components/ModifyStatus/ModifyStatus'));

function App() {
  return (
    <BrowserRouter>
      <Toast />
      <Loader />
      <Suspense fallback={<p>Loading...</p>}>
        <Layout>
          <Switch>
              <Route path="/create-tasks" component={AddTodo} />
              <Route path="/modify-status" component={ModifyStatus} />
              <Route path="/" component={Todos} />
          </Switch>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
