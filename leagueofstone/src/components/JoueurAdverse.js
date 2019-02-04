import React, { Component } from "react";

import axios from 'axios';
import { connect } from 'react-redux';
import {SERVER_URL} from './consts';

import '../stylesheets/Joueur.css';
import CardVisible from './CardVisible.js';
import HandsCards from './HandsCards.js';
import Card from "./CardHand.js";


class JoueurAdverse extends Component {

    render() {
      return (
        <div>
            <div className="hero">
                <div className="col" onClick={() => this.props.handleAttackDest("hero")}>
                    <p className="pJoueurA">Joueur {this.props.player.name}</p>
                    <p>JA : {this.props.player.hp}</p>
                </div>
                <div className="col1">
                    <p className="pDeck">{console.log(this.props.player.deck)}
                    {this.props.player.deck}</p>
                </div>
            </div>
            <div className="visible">
                <CardVisible board={this.props.player.board}
                             handleCard={this.props.handleAttackDest}/>
            </div>
        </div>
      );
    }

}

export default JoueurAdverse;
