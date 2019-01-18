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

class LOSRouter extends Component {
  constructor(props) {
    super(props);

    // this.setSessionToken = this.setSessionToken.bind(this);
    // this.handleLogout = this.handleLogout.bind(this);
  }

  render() {
    console.log(this.props.sessionToken)
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
  return { sessionToken: state.sessionReducer.sessionToken}
}

// const mapDispatchToProps = dispatch => {
//   return {
//     setTokenSession: token => {
//       dispatch(setTokenSession(token))
//     }
//   }
// }

export default connect(mapStateToProps,null)(LOSRouter)
