import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// Redux
import { connect } from 'react-redux';
import setTokenSession from '../actions/setTokenSession'

import { SERVER_URL } from "./consts";

import "../stylesheets/App.css";
import "../stylesheets/Signin.css";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
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
          console.log(res.data.data);
          this.props.setTokenSession(res.data.data.token,
              res.data.data.id,
              res.data.data.email,
              res.data.data.name);
          this.props.history.push(process.env.PUBLIC_URL + "/");
        } else if(res.data.status === "error") {
          this.setState({error: res.data.message})
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
      <div className="base">
        <form onSubmit={this.handleSubmit}>
          <h1>Connectez-vous :</h1>
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
            <p>{this.state.error}</p>
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
};

const mapDispatchToProps = dispatch => {
  return {
    setTokenSession: (token, id, email, name) => {
      dispatch(setTokenSession(token, id, email, name))
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Signin)
