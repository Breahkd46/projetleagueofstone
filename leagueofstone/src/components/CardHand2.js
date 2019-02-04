import React, { Component } from "react";

import '../stylesheets/Card.css';

class CardHand extends Component {


    render() {
        let id = "id"+this.props.lvl;
        let img = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+this.props.img+"_0.jpg";
        return (
            <div className="face front">
                <div className={id} onClick={this.props.click}>
                    <div className="visiblePrincipal" style={{backgroundImage: "url("+img+")"}}>
                        <div className="card-text">
                            <div className={"card-text-title"}>
                                <p>{this.props.name}</p>
                            </div>
                            <div className={"card-text-item-left"}>
                                <img src={"swords.png"} />
                                <p>A : {this.props.attack}</p>
                            </div>
                            <div className={"card-text-item-right"}>
                                <img src={"security-badge.png"} />
                                <p>D : {this.props.def}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardHand;
