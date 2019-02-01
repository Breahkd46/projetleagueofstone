import React, { Component } from 'react';
import "./stylesheets/Card.css";

class CardHand extends Component {

    constructor(props){
        super(props);
    }
    // flipped() {
    //     return this.props.flipped ? "notflipped" : "flipped";
    // }

    render() {
        let id = "id"+this.props.lvl;
        let img = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+this.props.img+"_0.jpg";

        return (
            <div className={id} onClick={this.props.onClick}>
              <div className="hausementepaule" style={{backgroundImage: "url("+img+")"}}>
                {this.props.name}
              </div>
            </div>
        );
    }
}

export default CardHand;
