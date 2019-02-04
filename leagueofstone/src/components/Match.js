import React, { Component } from "react";

import updateMatch from "../actions/updateMatch";
import {connect} from "react-redux";

import axios from "axios";
import { SERVER_URL } from "./consts";
import { RELOAD_TIME } from "./consts";

import '../stylesheets/App.css'
import '../stylesheets/Signin.css'
import MakeDeck from "./MakeDeck.js";
import Part from "./Part.js"

class Match extends Component {
    constructor(props) {
        super(props);
        if(this.props.match.status === '' || this.props.match.status === "Deck is pending") {
            this.setState({
                isDeck: true,
            });
        } else {
            this.state = {
                isDeck: false,
            }
        }


        this.handleDeckInit = this.handleDeckInit.bind(this)
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.reloadMatch(),
            RELOAD_TIME
        );
        this.loadMatch()
        if(this.props.match.status === '' || this.props.match.status === "Deck is pending") {
            this.setState({
                isDeck: true,
            });
        }
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    loadMatch() {
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
    reloadMatch() {
        if (this.state.isDeck && this.props.match.status === "Deck is pending") {
            this.loadMatch();
        }

    }

    handleDeckInit() {
        this.setState({
            isDeck: true,
        })
    }

    render() {
        console.log(this.props.match.status)
        if(this.props.match.status === "") {
            return (
                <div className="base"><h1>Loading...</h1></div>

            )
        }else if (this.props.match.status === "Deck is pending") {
            return (
                <div>
                    <MakeDeck handleDeckInit={this.handleDeckInit}/>
                </div>
            )
        }else {
            console.log(this.props.sessionToken.id)
            console.log(this.props.matchmaking.match.player2)
            console.log(this.props.match.player1.hand)
            return (
                <div >
                    <Part />
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
