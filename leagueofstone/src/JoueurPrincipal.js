import React, { Component } from "react";
import "./stylesheets/Joueur.css";
import CardVisible from "./CardVisible";
import HandsCards from "./HandsCards";

import axios from "axios";
import {SERVER_URL} from "./consts";
import Card from "./CardHand.js";
import { connect } from 'react-redux';

class JoueurPrincipal extends Component {

    render() {
      return (
        <div>
            <div>
                Carte visible
            </div>
            <div>
              {<HandsCards handPlayer={this.props.player.hand}/>}
            </div>
            <div>
                <div className="col2">
                 <p className="pJoueurP">Joueur {this.props.player.name}</p>
                </div>
                <div className="col3">
                </div>
            </div>
            
        </div>
      );
    }

}

export default JoueurPrincipal;
