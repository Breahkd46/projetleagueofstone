import React, { Component } from "react";

// Redux
import { connect } from 'react-redux';
//import setMatch from './actions/setMatch';

import './App.css';
// import logo from "./logo.svg";
import "./Game.css";
import Card from "./Card.js";
import DownCard from './DownCard'

import axios from "axios";
import {SERVER_URL} from "./consts";


class HandsCards extends Component {
  constructor(props){
    super(props);
    this.handleHandToBoard = this.handleHandToBoard.bind(this);
  }

    createHandsCardsJ2 = () => {
        let handJ2 = []

        for (let i = 0; i < this.props.handPlayer; i++) {
            handJ2.push(<DownCard key={i}/>)
        }
        return handJ2
    }

    handleHandToBoard(key){
      console.log("Carte jouée", key);
      const keyCard = key;
      axios
          .get(
              SERVER_URL + "/match/playCard?token=" +
              this.props.sessionToken.token + "&card=" +
              keyCard
          )
          .then(res => {
              if (res.data.status === "ok") {
                  console.log(res.data.data);
                  this.props.handlePlayCard();
              } else {
                  console.log(res.data.message);
              }
          });
    }

    render() {
        if (this.props.handPlayer instanceof Array) {
            return (
                <div>
                    {console.log(this.props.handPlayer)}
                    {this.props.handPlayer.map((card, index) => {
                        {console.log(card)}
                        return (
                            <div key={index} className="handsCardsJ1">
                                <Card key={index} onClick={null} name={card.name} img={card.key} info={card.stats} onClick={() => this.handleHandToBoard(card.key)}/>
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

const mapStateToProps = state => {
    return {
        match: state.matchReducer,
        sessionToken: state.sessionReducer

    }
};

//const mapDispatchToProps = dispatch => {
    //return {
//        setMatch: match => {
  //          dispatch(setMatch(res.data.data))
  //      }
  //  }
//};
export default connect(mapStateToProps, null)(HandsCards)
//export default HandsCards;
