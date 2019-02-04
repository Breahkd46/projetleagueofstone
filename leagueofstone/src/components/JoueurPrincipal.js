import React, { Component } from "react";

import axios from 'axios';
import {SERVER_URL} from './consts';
import { connect } from 'react-redux';

import "../stylesheets/Joueur.css";
import CardVisible2 from "./CardVisible2.js";
import HandsCards from "./HandsCards.js";

class JoueurPrincipal extends Component {

    render() {
        console.log(this.props.handleAttackSource)
        return (
            <div>
                <div className="boardPrincipal">
                    <CardVisible2 board={this.props.player.board} handleCard={this.props.handleAttackSource}/>
                </div>
                <div>
                    <div className="col2">
                        <p className="pJoueurP">Joueur {this.props.player.name}</p>
                        <p className="pv">JP : {this.props.player.hp}</p>
                    </div>
                    <div>
                        <button className="col3" disabled={!this.props.player.turn || (this.props.player.turn && this.props.player.cardPicked)}
                                onClick={this.props.handlePickCard}>
                        </button>
                    </div>
                    {/*<div className="col3" >*/}
                    {/*</div>*/}
                </div>
                <div>
                    <HandsCards handPlayer={this.props.player.hand}
                                handlePlayCard={this.props.handlePlayCard}/>
                </div>

                <div>
                        <button disabled={!this.props.player.turn}
                                onClick={this.props.handleEndTurn}>
                            Fin du tour
                        </button>
                    </div>
            </div>
        );
    }

}

export default JoueurPrincipal;
