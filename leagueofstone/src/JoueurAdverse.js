import React, { Component } from "react";
import "./stylesheets/Joueur.css";
import CardVisible from "./CardVisible";
import HandsCards from "./HandsCards";

class JoueurAdverse extends Component {

    render() {
      return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src="/lol.jpg"/>
                </div>
                <div className="col">
                   Deck
                </div>
            </div>
            <div className="div_img">
                <CardVisible handleCard = {this.props.handleReceive} board = {this.props.player.board}/>

            </div>
            <div className="hand">
              {<HandsCards handPlayer={this.props.player.hand}/>}
            </div>
        </div>
      );
    }

}

export default JoueurAdverse;
