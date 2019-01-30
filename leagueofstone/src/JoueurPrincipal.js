import React, { Component } from "react";
import "./stylesheets/Joueur.css";
import CardVisible from "./CardVisible";

import axios from "axios";
import {SERVER_URL} from "./consts";
import Card from "./Card.js";
import { connect } from 'react-redux';

class JoueurPrincipal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hands: []
        }
    }
    
    componentDidMount() {
      axios
        .get(
           SERVER_URL + "/match/getMatch?token=" +
              this.props.sessionToken.token
       )
          .then(res => {
            console.log(res);
              if (res.statusText === "OK") {
                  let finalHands = [];
                  let handsRequete = res.data.data.player1.hand
                  for (let cartes in handsRequete){
                    console.log("toto");

                    finalHands.push(
                        <Card key={res.data.data.player1.hand.index} onClick={null} name={res.data.data.player1.hand.name} img={res.data.data.player1.hand.key}  info={res.data.data.player1.hand.stats} />
                    )
                    }
              this.setState({
                  hands: finalHands,
              })     
                    console.log(this.state.hands);

            } else {
                  console.log(this.state.hands);
              }
         });
    }
  
    render() {
      return (
        <div class="container">
            <div class="div_img">
                {/* <CardVisible /> */}
                Carte visible
            </div>
            <div class="div_img">
                {this.state.hands}
                {/* .map((card, index) => {
                    {console.log(card)}
                        return (<Card key={index} onClick={null} name={card.name} img={card.key}  info={card.stats} />)
                    })} */}

            </div>
            <div class="row">
                <div class="col">
                    <img src="/lol2.jpg"/>
                </div>
                <div class="col">
                    <div class="deck">
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

  
  export default connect(mapStateToProps, null)(JoueurPrincipal)