import React, { Component } from "react";

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
import { connect } from 'react-redux';

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

// const mapDispatchToProps = dispatch => {
//   return {
//     setTokenSession: token => {
//       dispatch(setTokenSession(token))
//     }
//   }
// }

export default connect(mapStateToProps,null)(LOSRouter)
