import React, { Component } from "react";

<<<<<<< HEAD
// import logo from "./logo.svg";

// Requete Server
import axios from "axios";
import { SERVER_URL } from "./consts";
// Redux
import { connect } from 'react-redux';
import removeTokenSession from './actions/removeTokenSession'


=======
import logo from "./logo.svg";
import axios from "axios";

import { SERVER_URL } from "./consts";
>>>>>>> devEmma
import "./App.css";

class Logout extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    axios
      .get(
<<<<<<< HEAD
        SERVER_URL + "/users/disconnect?token=" +
        this.props.sessionToken.token
=======
        SERVER_URL + "/users/disconnect"
>>>>>>> devEmma
      )
      .then(res => {
        if (res.data.status === "ok") {
          console.log(res.data);
<<<<<<< HEAD
          this.props.removeTokenSession("");
          // this.props.history.push(process.env.PUBLIC_URL + "/");
        }
      });
=======
          this.props.setLogout();
          // this.props.history.push(process.env.PUBLIC_URL + "/");
        }
      });
      this.props.setLogout();
>>>>>>> devEmma
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        Log out
      </button>
    );
  }
}

<<<<<<< HEAD
const mapStateToProps = state => {
  return { sessionToken: state.sessionReducer}
}

const mapDispatchToProps = dispatch => {
  console.log("ok");
  return {
    removeTokenSession: token => {
      dispatch(removeTokenSession(token))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Logout)
=======
export default Logout;
>>>>>>> devEmma
