import React, { Component } from "react";

// Import pour redux
import { connect } from 'react-redux';

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Signin from "./components/Signin.js";
import Signup from "./components/Signup.js";
import Game from "./components/Game.js";



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

class LOSRouter extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute component={Game} isConnected={this.props.sessionToken.isConnected} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return { sessionToken: state.sessionReducer}
}

export default connect(mapStateToProps,null)(LOSRouter)
