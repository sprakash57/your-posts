import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Employees from './components/Employees';
import EmployeeDetails from './components/EmployeeDetails';
import Posts from './components/Posts';
import PostDetails from './components/PostDetails';
import PageNotFound from './components/common/PageNotFound';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/employees' component={Employees} />
        <Route exact path='/employees/:id' component={EmployeeDetails} />
        <Route exact path='/posts' component={Posts} />
        <Route exact path='/posts/:id' component={PostDetails} />
        <Route component={PageNotFound} />
      </Switch>
    </HashRouter>
  );
}

export default App;
