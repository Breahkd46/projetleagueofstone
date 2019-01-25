import React, { Component } from 'react';
import "./card.css";
class Card extends Component {
    flipped() {
        return this.props.flipped ? "notflipped" : "flipped";
    }

    render() {

        return (
            <div className="mb-4 flip" onClick={this.props.onClick}>
                <div className={`card mb-4 flip bg-dark text-white thumbnail ${this.flipped()}`} >
                    <div className="face front">
                        <img className="card-img-top" src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.props.img}.jpg`}/>
                        <p className="card-text">{this.props.name}.</p>
                    </div>
                    <div className="face back">
                        <img className="card-img-top" src="back.jpg" alt="Card  cap"/>
                        <div className="card-body">
                            <p className="card-text">Click me</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;