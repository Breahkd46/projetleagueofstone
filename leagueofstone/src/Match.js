import React, { Component } from "react";

import setMatch from "./actions/setMatch";
import {connect} from "react-redux";

import './App.css'
import './Signin.css'
import MakeDeck from "./MakeDeck";
import axios from "axios";
import {SERVER_URL} from "./consts";

import Part from "./Part"

class Match extends Component {
    // constructor(props) {
    //   super(props);
    //
    // }

    componentDidMount() {
        axios
            .get(
                SERVER_URL + "/match/getMatch?token=" +
                this.props.sessionToken.token
            )
            .then(res => {
                if (res.data.status === "ok") {
                    console.log(res.data.data);
                    this.props.setMatch(res.data.data.status, res.data.data.player1, res.data.data.player2)
                    // this.props.history.push(process.env.PUBLIC_URL + "/");
                } else {
                    console.log(res.data.message);
                }
            });
    }


    render() {
        if(this.props.match.status === "") {
            return (
                <div className="base"><p><h1>Loading...</h1></p></div>
                
            )
        }else if (this.props.match.status === "Deck is pending") {
            return (
                // <div className="base">
                //     <p><h1>Constituer son deck</h1></p>
                //     <MakeDeck />
                // </div>
                <div >
                    <Part />
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
                    </header>
                </div>
            )
        }

    }
    // render() {
    //     return (
    //         <div>
    //             <p>CouCOU</p>
    //         </div>
    //     )
    // }
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
        setMatch: (status, player1, player2) => {
            dispatch(setMatch(status, player1, player2))
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Match)
