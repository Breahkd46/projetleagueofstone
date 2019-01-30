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
            hand: []
        }
    }
    
    componentDidMount() {
      axios
        .get(
           SERVER_URL + "/match/getMatch?token=" +
              this.props.sessionToken.token
       )
          .then(res => {
            console.log(res.data);
              if (res.data.status === "ok") {
                  // let finalHands = [];
                  // let handsRequete = res.data.data.player1.hand
                  // console.log(handsRequete)
                  this.setState({
                      hand: res.data.data.player1.hand
                  })

                  // for (let cartes in handsRequete){
                  //   console.log("toto");
                  //
                  //   finalHands.push(
                  //       <Card key={cartes.key} onClick={null} name={cartes.name} img={cartes.key}  info={cartes.stats} />
                  //   )
                  //   }
              // this.setState({
              //     hands: finalHands,
              // })
              //       console.log(this.state.hand);

            } else {
                  console.log(this.state.hand);
              }
         });
    }
  
    render() {
        console.log(this.state.hand)
      return (
        <div class="container">
            <div class="div_img">
                {/* <CardVisible /> */}
                Carte visible
            </div>
            <div class="div_img">
                {this.state.hand.map((card, index) => {
                    {console.log(card)}
                        return (<Card key={index}
                                      onClick={null}
                                      name={card.name}
                                      img={card.key}
                                      info={card.stats} />)
                    })}
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