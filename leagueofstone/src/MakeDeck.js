import React, { Component } from "react";

// Redux
import { connect } from 'react-redux';
import setMatch from './actions/setMatch';

import './App.css'
import logo from "./logo.svg";
import "./Game.css";
import Match from "./Match";
import axios from "axios";
import {SERVER_URL} from "./consts";

class MakeDeck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
    }
     componentDidMount() {
         axios
             .get(
                 SERVER_URL + "/cards/getAll?token=" +
                 this.props.sessionToken.token
             )
             .then(res => {
                 if (res.data.status === "ok") {
                     console.log(res.data.data);
                     // this.props.history.push(process.env.PUBLIC_URL + "/");
                 } else {
                     console.log(res.data.message);
                 }
             });
     }

    render() {
       return (
           <div className="Board card-columns">
               {/*{this.state.champions.map((champ, index) =>*/}
                   {/*<Card key={index} name={champ.name} img={champ.img}*/}
                         {/*flipped={champ.flipped}*/}
                         {/*onClick={() => this.handleClick(index,champ.id,champ.flipped)} />*/}
               {/*)}*/}
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
export default connect(mapStateToProps,mapDispatchToProps)(MakeDeck)