import React, { Component } from "react";

import updateMatch from "./actions/updateMatch";
import {connect} from "react-redux";

import './App.css'
import MakeDeck from "./MakeDeck";

import HandsCards from "./HandsCards.js"
// Server
import axios from "axios";
import { SERVER_URL } from "./consts";
import { RELOAD_TIME } from "./consts";

class Match extends Component {
    // constructor(props) {
    //   super(props);
    //
    // }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.reloadMatch(),
            RELOAD_TIME
        );
        this.reloadMatch()
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    reloadMatch() {
        axios
            .get(
                SERVER_URL + "/match/getMatch?token=" +
                this.props.sessionToken.token
            )
            .then(res => {
                if (res.data.status === "ok") {
                    console.log(res.data.data);
                    this.props.updateMatch(res.data.data.status, res.data.data.player1, res.data.data.player2);
                } else {
                    console.log(res.data.message);
                }
            });
    }

    render() {
        console.log(this.props.match.status)
        if(this.props.match.status === "") {
            return (
                <p>Loading...</p>
            )
        }else if (this.props.match.status === "Deck is pending") {
            return (
                <div>
                    <p>Constituer son deck</p>
                    <MakeDeck />
                </div>
            )
        }else {
            return (
                <div >
                    <header >
                        <h2>League of Stones</h2>
                        <p>Bienvenue</p> <br />
                        <p> Et c'est parti </p>
                        <div> {this.props.matchmaking.match.player1.name}</div>
                        <p> CONTRE </p>
                        <div> {this.props.matchmaking.match.player2.name} </div>
                          <HandsCards />
                    </header>
                </div>

            )
        }

    }
}

const mapStateToProps = state => {
    return {
        match: state.matchReducer,
        matchmaking: state.matchmakingReducer,
        sessionToken: state.sessionReducer

    }
};

const mapDispatchToProps = dispatch => {
    return {
        updateMatch: (status, player1, player2) => {
            dispatch(updateMatch(status, player1, player2))
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Match)
