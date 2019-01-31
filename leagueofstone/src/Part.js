import React, { Component } from "react";
import "./stylesheets/Part.css";

import ButtonTimer from "./ButtonTimer";
import JoueurAdverse from "./JoueurAdverse";
import JoueurPrincipal from "./JoueurPrincipal";

import "./stylesheets/Joueur.css";

import axios from "axios";
import {SERVER_URL} from "./consts";
import Card from "./Card.js";
import { connect } from 'react-redux';

class Part extends Component {

  constructor(props) {
    super(props);
    this.state = {
        player1: "",
        player2: ""

    }
}

componentDidMount() {
  axios
    .get(
       SERVER_URL + "/match/getMatch?token=" +
          this.props.sessionToken.token
   )
      .then(res => {
          if (res.data.status === "ok") {
              console.log(res.data.data.player1);
              if (this.props.sessionToken.id === res.data.data.player1.id) {
                  this.setState({
                      player1: res.data.data.player1,
                      player2: res.data.data.player2
                  })
              } else {
                  this.setState({
                      player1: res.data.data.player2,
                      player2: res.data.data.player1
                  })
              }

              // this.props.history.push(process.env.PUBLIC_URL + "/");
          } else {
              console.log(res.data.message);
          }
     });
}



  
    render() {
      return (
        <div class="newBase">
          <div class="container">
              <div class="row">
                <JoueurAdverse player={this.state.player2}/>
              </div>
              <div class="row">
                <JoueurPrincipal player={this.state.player1}/>
              </div>
              <div class="row">
                <div class="col">
                <ButtonTimer />
                </div>
                <div class="col">
                  Fin de tour
                </div>
              </div>
          </div>
        </div>
      );
    }
  
}

const mapStateToProps = state => {
  return {
      match: state.matchReducer,
      sessionToken: state.sessionReducer

  }
};

  
export default connect(mapStateToProps, null)(Part)
  