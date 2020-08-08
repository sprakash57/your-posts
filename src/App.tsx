import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Posts from './components/Posts';
import Comments from './components/Comments';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/users' component={Users} />
        <Route exact path='/users/:id' component={UserDetails} />
        <Route exact path='/posts' component={Posts} />
        <Route exact path='/posts/:id' component={Comments} />
      </Switch>
    </HashRouter>
  );
}

export default App;
