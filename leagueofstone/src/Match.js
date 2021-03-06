import React, { Component } from "react";

import updateMatch from "./actions/updateMatch";
import {connect} from "react-redux";

import './stylesheets/App.css'
import './stylesheets/Signin.css'
import MakeDeck from "./MakeDeck";
// Server
import axios from "axios";
import { SERVER_URL } from "./consts";
import { RELOAD_TIME } from "./consts";

import Part from "./Part"

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
                    {/*<header >*/}
                        {/*<h2>League of Stones</h2>*/}
                        {/*<p>Bienvenue</p> <br />*/}
                        {/*<p> Et c est parti </p>*/}
                        {/*<div> {this.props.matchmaking.match.player1.name}</div>*/}
                        {/*<p> CONTRE </p>*/}
                        {/*<div> {this.props.matchmaking.match.player2.name} </div>*/}
                    {/*</header>*/}
                    <Part />
                    {/*<div> <JoueurAdverse player={this.props.match.player2} /> </div>*/}
                    {/*<div> <JoueurPrincipal player={this.props.match.player1} /> </div>*/}
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
