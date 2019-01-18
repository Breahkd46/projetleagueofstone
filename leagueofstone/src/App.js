import React, { Component } from "react";

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Signin from "./Signin";
import Signup from "./Signup";
import Game from "./Game";

// Import pour redux
import losApp from './los-reducer/reducers';

import "./App.css";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return rest.isConnected ? (
        <Component {...props} {...rest} />
      ) : (
        <Redirect to="/signin" />
      );
    }}
  />
);
// Creation du store pour Redux
let store = createStore(
  losApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      isConnected: false
    };

    this.setSessionToken = this.setSessionToken.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout() {
    this.setState({
      token: "",
      isConnected: false
    })
  }
  setSessionToken(token) {
    this.setState({ token, isConnected: true });
  }

  render() {
    return (
      <Provider store={store}>
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
          <PrivateRoute component={Game} setLogout={this.handleLogout} isConnected={this.state.isConnected} />
        </Switch>
      </Router>
      </Provider>
    );
  }
}

export default App
