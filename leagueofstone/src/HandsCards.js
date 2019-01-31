import React, { Component } from "react";

// Redux
// import { connect } from 'react-redux';
//import setMatch from './actions/setMatch';

import './App.css';
// import logo from "./logo.svg";
import "./Game.css";
import Card from "./Card.js";
import DownCard from './DownCard'

// import axios from "axios";
// import {SERVER_URL} from "./consts";


class HandsCards extends Component {

    createHandsCardsJ2 = () => {
        let handJ2 = []

        for (let i = 0; i < this.props.handPlayer; i++) {
            handJ2.push(<DownCard key={i}/>)
        }
        return handJ2
    }


    render() {
        if (this.props.handPlayer instanceof Array) {
            return (
                <div>
                    {console.log(this.props.handPlayer)}
                    /* J'affiche bien une array de card dans ma console mais on me dit que this.props.handPlayer est pas défini..*/
                    {this.props.handPlayer.map((card, index) => {
                        {
                            console.log(card)
                        }
                        /* Ce console.log marche et affiche des cartes dans la console */
                        return (
                            <div key={index} className="handsCardsJ1">
                                <Card key={index} onClick={null} name={card.name} img={card.key} info={card.stats}/>
                            </div>
                        )
                    })}
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

//const mapStateToProps = state => {
  //  return {
  //      match: state.matchReducer,
  //      sessionToken: state.sessionReducer

  //  }
//};

//const mapDispatchToProps = dispatch => {
    //return {
//        setMatch: match => {
  //          dispatch(setMatch(res.data.data))
  //      }
  //  }
//};
//export default connect(mapStateToProps, null)(HandsCards)
export default HandsCards;
