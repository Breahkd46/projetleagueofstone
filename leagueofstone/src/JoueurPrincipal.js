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
            handsCardsJ2: []
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
                  console.log(res.data.data.player2.hand);
                  this.setState({
                    handsCardsJ1: res.data.data.player2.hand
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
            <div class="div_img">
                {/* <CardVisible /> */}
                Carte visible
            </div>
            <div class="div_img">
                {this.state.handsCardsJ2}
                {/* {this.state.handsCardsJ1.map((card, index) => {
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