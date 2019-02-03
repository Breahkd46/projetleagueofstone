import React, {Component} from "react";
import Card from './CardHand.js'
import './Game.css'
import axios from "axios";
import {SERVER_URL} from "./consts";
import CardHand from "./CardHand";

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
                    <CardHand key={index}
                              className={this.state.selectedCard === champ.key?"selectedCard":""}
                              lvl={index + 1}
                              name={champ.key}
                              img={champ.key}
                              click={() => this.handleClickCard(champ.key)}
                    />)}
            </div>
        )
    }
}

export default CardVisible;