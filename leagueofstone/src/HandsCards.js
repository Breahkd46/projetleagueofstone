import React, { Component } from "react";

// Redux
import { connect } from 'react-redux';
//import setMatch from './actions/setMatch';

import './App.css';
import logo from "./logo.svg";
import "./Game.css";
import Card from "./Card.js";
import DownCard from './DownCard'

import axios from "axios";
import {SERVER_URL} from "./consts";


class HandsCards extends Component {
    constructor(props) {
        super(props);
        //this.state = {
        //    handsCardsJ1: [],
        //    numberCardsJ2: 0,
        //    idPlayer1: "",
        //    idPlayer2: ""

        //}
    }
     //componentDidMount() {
      //   axios
        //   .get(
        //      SERVER_URL + "/match/getMatch?token=" +
        //         this.props.sessionToken.token
        //  )
        //     .then(res => {
        //         if (res.data.status === "ok") {
        //             console.log(res.data.data.player1.id);
        //             console.log(res.data.data.player2.hand);
        //             this.setState({
        //               handsCardsJ1: res.data.data.player1.hand,
        //               numberCardsJ2: res.data.data.player2.hand,
        //               idPlayer1: res.data.data.player1.id,
        //               idPlayer2: res.data.data.player2.id
        //          })
                     // this.props.history.push(process.env.PUBLIC_URL + "/");
        //         } else {
        //             console.log(res.data.message);
        //         }
        //    });
     //}


    createHandsCardsJ2 = () => {
      let handJ2 = []

      for (let i = 0; i < this.state.numberCardsJ2; i++){
        handJ2.push(<DownCard img = {"./dos-carte.png"} />)
      }
      return handJ2
    }


    render() {
      if(this.props.player.id === this.props.sessionToken.id)
       {
        return (
            <div className="handsCardsJ1">
                {this.state.handsCardsJ1.map((card, index) => {
                  {console.log(card)}
                    return (<Card key={index} onClick={null} name={card.name} img={card.key}  info={card.stats} />)
                })}
            </div>
        ) } else {
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
