import React, { Component } from "react";

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import LOSRouter from './LOSRouter';

import { Router, Route, Switch } from 'react-router';
import Signin from "./Signin.js";
import Signup from "./Signup";
import Game from "./Game";
import PrivateRoute from "./LOSRouter";

// Import pour redux
import losApp from './los-reducer/reducers';

import "./App.css";
import Logout from "./Logout";

// Creation du store pour Redux
let store = createStore(
  losApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/signin"
            render={props => (
              <Signin setSessionToken={this.setSessionToken} {...props} />
            )}
          />
          />
          <Route path="/signup" component={Signup} />
          <Route path="/game" component={Game} />
          <Route path="/logout" component={Logout} />
          <PrivateRoute component={Game} isConnected={this.state.isConnected} />
          <Provider store={store}>
        <LOSRouter />
      </Provider>
        </Switch>
      </Router>
    );
  }
}

export default App
