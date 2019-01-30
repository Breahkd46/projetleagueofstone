import React, { Component } from 'react';
import "./stylesheets/card.css";
class Card extends Component {
    // flipped() {
    //     return this.props.flipped ? "notflipped" : "flipped";
    // }

    render() {

        return (
            <div className="flip" onClick={this.props.onClick}>
                <div className={`card flip`} >
                    <div className="face front">
                        <img className="" alt={`${this.props.name} card`} src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.props.img}_0.jpg`}/>
                        <div className="card-text container">
                            <div className={"card-text-item-left"}>
                                <p>A : {this.props.info.attack}</p>
                                <p>M : {this.props.info.magic}</p>
                            </div>
                            <div className={"card-text-title"}>
                                <p>{this.props.name}</p>
                            </div>
                            <div className={"card-text-item-right"}>
                                <p>D : {this.props.info.defense}</p>
                                <p>Dif : {this.props.info.difficulty}</p>
                            </div>
                        </div>
                    </div>
                    {/*<div className="face back">*/}
                        {/*<img className="card-img-top" src="back.jpg" alt="Card  cap"/>*/}
                        {/*<div className="card-body">*/}
                            {/*<p className="card-text">Click me</p>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                </div>
        );
    }
}

export default Card;