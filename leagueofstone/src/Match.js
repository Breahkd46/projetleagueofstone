import React, { Component } from "react";

import updateMatch from "./actions/updateMatch";
import {connect} from "react-redux";

import './App.css'
import './Signin.css'
import MakeDeck from "./MakeDeck";
import HandsCards from "./HandsCards";
import JoueurAdverse from "./JoueurAdverse";
import JoueurPrincipal from "./JoueurPrincipal";
// Server
import axios from "axios";
import { SERVER_URL } from "./consts";
import { RELOAD_TIME } from "./consts";

import Part from "./Part"

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
                <div className="base"><p><h1>Loading...</h1></p></div>

            )
        }else if (this.props.match.status === "Deck is pending") {
            return (
                <div>
                    <MakeDeck />
                </div>
            )
        }else {
            console.log(this.props.sessionToken.id)
            console.log(this.props.matchmaking.match.player2)
            console.log(this.props.match.player1.hand)
            return (
                <div >
                    <header >
                        <h2>League of Stones</h2>
                        <p>Bienvenue</p> <br />
                        <p> Et c est parti </p>
                        <div> {this.props.matchmaking.match.player1.name}</div>
                        <p> CONTRE </p>
                        <div> {this.props.matchmaking.match.player2.name} </div>
                          /*<HandsCards hand={this.props.matchmaking.match.player2.hand}/>*/
                          /*<HandsCards hand={this.props.matchmaking.match.player1.hand}/>*/
                    </header>

                    <div> <JoueurAdverse player={this.props.match.player2} /> </div>
                    <div> <JoueurPrincipal player={this.props.match.player1} /> </div>
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
