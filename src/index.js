import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserDetail from './UserDetails';
import * as serviceWorker from './serviceWorker';
import history from "./history";
import { Route, Router, Switch } from "react-router-dom";

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact path="/" render={() => <App />} />
      <Route path='/users/:document' render={(props) => <UserDetail {...props} />} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
