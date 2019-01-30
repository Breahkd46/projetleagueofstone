import React, { Component } from "react";
import "./stylesheets/Joueur.css";
import CardVisible from "./CardVisible";

import axios from "axios";
import {SERVER_URL} from "./consts";
import Card from "./Card.js";
import { connect } from 'react-redux';

class JoueurAdverse extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deckCardsJ1: []
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
                    console.log(res.data.data.player1.deck);
                    this.setState({
                      handsCardsJ1: res.data.data.player1.deck
                 })
                    // this.props.history.push(process.env.PUBLIC_URL + "/");
                } else {
                    console.log(res.data.message);
                }
           });
      }
  
    render() {
      return (
        <div class="container">
            <div class="row">
                <div class="col">
                    <img src="/lol.jpg"/>
                </div>
                <div class="col">
                    <div class="deck">
                        <p>{this.state.handsCardsJ1}</p>
                    </div>
                </div>
            </div>
            <div class="div_img">
                {/* <CardVisible /> */}
                Carte Visible
                
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
  
  export default connect(mapStateToProps, null)(JoueurAdverse)