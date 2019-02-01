import React, { Component } from "react";
import "./stylesheets/Joueur.css";
import HandsCards from "./HandsCards";

class JoueurAdverse extends Component {

    render() {
      return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <img alt='photo lol' src="/lol.jpg"/>
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
