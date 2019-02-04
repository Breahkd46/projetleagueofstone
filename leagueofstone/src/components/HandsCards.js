import React, { Component } from "react";

// Redux
import { connect } from 'react-redux';

import axios from "axios";
import {SERVER_URL} from "./consts";

import '../stylesheets/App.css';
import "../stylesheets/Game.css";
import CardHand from './CardHand.js';
import DownCard from './DownCard.js'

class HandsCards extends Component {

    constructor(props){
        super(props);
        this.state = {
            hand: [],
            cardPlayed: "",
            nbClick: 0,
        }
        this.handleClickCard = this.handleClickCard.bind(this);
    }

    createHandsCardsJ2 = () => {
        let handJ2 = []


        for (let i = 0; i < this.props.handPlayer; i++) {
            handJ2.push(<DownCard key={i}/>)
        }
        return handJ2
    }

    handleClickCard(name) {
        axios
            .get(
                SERVER_URL + "/match/playCard?token=" +
                this.props.sessionToken.token +
                "&card=" +
                name
            ).then(res => {
            if (res.data.status === "ok") {
                console.log(res.data.data);
                // this.props.history.push(process.env.PUBLIC_URL + "/");
            } else {
                console.log(res.data.message);
            }
        });
        this.props.handlePlayCard();
    }

    render() {

        if (this.props.handPlayer instanceof Array) {
            return (
                <div className="hand">
                    {/*{this.state.hand}*/}
                    {this.props.handPlayer.map((card, index) =>
                        <CardHand key={index}
                                  lvl={index + 1}
                                  name={card.name}
                                  img={card.key}
                                  attack={card.stats.attackdamage}
                                  def={card.stats.armor}
                                  click={() => this.handleClickCard(card.key)}
                        />
                    )}
                </div>
            )
        } else {
            return (
                <div className="handsCardsJ2">
                    {this.createHandsCardsJ2()}
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
   return {
       match: state.matchReducer,
       sessionToken: state.sessionReducer

   }
};

export default connect(mapStateToProps, null)(HandsCards)
