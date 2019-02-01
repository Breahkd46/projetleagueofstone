import React, { Component } from "react";
import "./stylesheets/Joueur.css";
import CardVisible from "./CardVisible";
import HandsCards from "./HandsCards";

import axios from "axios";
import {SERVER_URL} from "./consts";
import Card from "./CardHand.js";
import { connect } from 'react-redux';

class JoueurAdverse extends Component {

    render() {
      return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src="/lol.jpg"/>
                </div>
                <div className="deck">
            
                {console.log(this.props.player.deck)}
                    {this.props.player.deck}
                </div>
            </div>
            <div className="div_img">
                {/* <CardVisible /> */}
                Carte Visible

            </div>
            <div className="hand">
              {<HandsCards handPlayer={this.props.player.hand}
                           handlePlayCard={null}/>}
            </div>
        </div>
      );
    }

}

  export default JoueurAdverse;
