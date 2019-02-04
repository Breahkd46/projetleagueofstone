import React, { Component } from "react";

// import logo from "./logo.svg";
import axios from "axios";

// Redux
import { connect } from 'react-redux';
import removeTokenSession from './actions/removeTokenSession'

import { SERVER_URL } from "./consts";
import "./stylesheets/App.css";
import "./stylesheets/Signin.css";

class Unsubscribe extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: ""
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    axios
      .get(
        SERVER_URL + "/users/unsubscribe?email=" +
        this.state.email +
        "&password=" +
        this.state.password +
        "&token=" +
        this.props.sessionToken.token
      )
      .then(res => {
        if (res.data.status === "ok") {
          console.log(res.data);
          this.props.removeTokenSession("");
          // this.props.history.push(process.env.PUBLIC_URL + "/");
        } else {
          console.log(res.message);
        }
      });
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  handleChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Supprimer son compte :</h1>
          <div className="cadre">
            <label>
              Login :{" "}
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleChangeEmail}
              />
            </label>
          </div>
          <div className="cadre">
            <label>
              Mot de passe :{" "}
              <input
                type="password"
                value={this.state.password}
                onChange={this.handleChangePassword}
              />
            </label>
          </div>
          <div>
            <input type="submit" value="Supprimer" />
          </div>
        </form>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return { sessionToken: state.sessionReducer}
}

const mapDispatchToProps = dispatch => {
  return {
    removeTokenSession: token => {
      dispatch(removeTokenSession(token))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Unsubscribe)
