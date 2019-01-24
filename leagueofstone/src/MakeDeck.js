import React, { Component } from "react";

// Redux
import { connect } from 'react-redux';
import setMatch from './actions/setMatch';

import './App.css'
import logo from "./logo.svg";
import "./Game.css";
import Match from "./Match";

class MakeDeck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusDeck: ""
        }
    }
    render() {
        if () {
            return (

            )
        }

    }
}

const mapStateToProps = state => {
    return {
        match: state.matchReducer
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setMatch: matchmakingId => {
            dispatch(setMatch(matchmakingId))
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(MakeDeck)