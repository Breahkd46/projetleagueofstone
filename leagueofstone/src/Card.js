import React, { Component } from 'react';
import "./stylesheets/Card.css";
class Card extends Component {
    constructor(props){
      super(props);
    }

    flipped() {
        return this.props.flipped ? "notflipped" : "flipped";
    }

    render() {

        return (
                <div>
                    <div className = "oui">
                        <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.props.img}_0.jpg`}/>
                        <p className="card-text">{this.props.name}</p>
                    </div>
                </div>
        );
    }
}

export default Card;