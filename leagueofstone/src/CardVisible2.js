import React, {Component} from "react";
import Card from './CardHand.js'
import './stylesheets/Game.css'
import axios from "axios";
import {SERVER_URL} from "./consts";
import CardHand2 from "./CardHand2";

class CardVisible extends Component {

    constructor(props) {
        super(props);
        this.state={
            selectedCard: "",
        }

        this.handleClickCard = this.handleClickCard.bind(this)

    }

    handleClickCard(card) {
        this.setState({
            selectedCard: card,
        })
        console.log(card);
        this.props.handleCard(card);
    }

    render() {
        return (
            <div>
                {this.props.board.map((champ, index) =>
                    <CardHand2 key={index}
                              className={this.state.selectedCard === champ.key?"selectedCard":""}
                              lvl={index + 1}
                              name={champ.key}
                              img={champ.key}
                              attack={champ.stats.attackdamage}
                              def={champ.stats.armor}
                              click={() => this.handleClickCard(champ.key)}
                    />)}
            </div>
        )
    }
}

export default CardVisible;