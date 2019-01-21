import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// Redux
import { connect } from 'react-redux';
import setTokenSession from './actions/setTokenSession'

import { SERVER_URL } from "./consts";

import "./App.css";
import "./Signin.css";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // Requete Ajax
    axios
      .get(
        SERVER_URL +
          "/users/connect?email=" +
          this.state.email +
          "&password=" +
          this.state.password
      )
      .then(res => {
        if (res.data.status === "ok") {
          // this.props.setSessionToken(res.data.token);
          this.props.setTokenSession(res.data.data.token)
          this.props.history.push(process.env.PUBLIC_URL + "/");
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
      <div class="base">
        <form onSubmit={this.handleSubmit}>
          <h1>Connectez-vous :</h1>
          <div class="cadre">
            <label>
              Login :{" "}
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleChangeEmail}
              />
            </label>
          </div>
          <div class="cadre">
            <label>
              Mot de passe :{" "}
              <input
                type="password"
                value={this.state.password}
                onChange={this.handleChangePassword}
              />
            </label>
          </div>
          <div id="bouton">
            <input type="submit" value="Se connecter" />
          </div>
        </form>
        <div>
          {
            "Vous n’avez pas de compte ? Créez votre compte en quelques secondes "
          }
          <Link to="/signup">en cliquant ici !</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { sessionToken: state.sessionReducer}
}

const mapDispatchToProps = dispatch => {
  return {
    setTokenSession: token => {
      dispatch(setTokenSession(token))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Signin)
