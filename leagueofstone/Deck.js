import React, { Component } from "react";

// Redux
import { connect } from 'react-redux';
import setMatch from './actions/setMatch';

import './App.css'
import logo from "./logo.svg";
import "./Game.css";
import Card from "./Card.js";

import axios from "axios";
import {SERVER_URL} from "./consts";

import MakeDeck from "./MakeDeck.js";
//import Player from "./Player";

class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deck: []
        }
    }
     componentDidMount() {
         axios  
            .get(
               SERVER_URL + "/match/getMatch?token=" +
                 this.props.sessionToken.token
            )
             .then(res => {
                 if (res.data.status === "ok") {
                     console.log(res.data.data);
                     this.setState({
                       handsCards: res.data.data.player1.deck
                     })
                     // this.props.history.push(process.env.PUBLIC_URL + "/");
                 } else {
                     console.log(res.data.message);
                 }
             });
     }

    render() {
        return (
            <div className="deck">
              <p> Deck </p>
                {this.state.handsCards.map((deck, index)=> {
                  return (
                      <Card key={index} name={card.name} img={card.img}/>
                  )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        match: state.matchReducer,
        sessionToken: state.sessionReducer

    }
};

const mapDispatchToProps = dispatch => {
    return {
        setMatch: matchmakingId => {
            dispatch(setMatch(matchmakingId))
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(HandsCards)
