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
          <div>
            <div className="hero">
                <div className="col">
                </div>
                <div className="col1">
                    <p>{console.log(this.props.player.deck)}
                    {this.props.player.deck}</p>
                </div>
            </div>
            <div className="visible">
                Carte Visible
            </div>
            </div>
            
      );
    }

}

  export default JoueurAdverse;
