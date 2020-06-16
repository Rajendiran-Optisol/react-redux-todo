import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './App.scss';

import Layout from './hoc/Layout/Layout';
import Todos from './containers/Todos/Todos';
import Toast from './components/UI/Toast/Toast';
const AddTodo = lazy(() => import('./components/AddTodo/AddTodo'));
const ModifyStatus = lazy(() => import('./components/ModifyStatus/ModifyStatus'));

function App() {
  return (
    <BrowserRouter>
      <Toast />
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
