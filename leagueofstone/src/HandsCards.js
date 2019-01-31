import React, { Component } from "react";

// Redux
// import { connect } from 'react-redux';
//import setMatch from './actions/setMatch';

import './App.css';
// import logo from "./logo.svg";
import "./Game.css";
import CardHand from "./CardHand.js";  
import DownCard from './DownCard'

// import axios from "axios";
// import {SERVER_URL} from "./consts";


class HandsCards extends Component {

    constructor(props){
        super(props);
        this.state = {
            hand: [],

        }
    }

    creatHand = () => {
        let handfinal = []
        let handTemp = this.props.handPlayer
        let i = 1;
        for(let c in handTemp){
            handfinal.push(
                <CardHand 
                lvl={i}
                name={handTemp[c]['name']}
                img={handTemp[c]['name']}
                
                />
            );
            i++
        }
        this.setState({
            hand: handfinal,
        })
    }

    createHandsCardsJ2 = () => {
        let handJ2 = []
        

        for (let i = 0; i < this.props.handPlayer; i++) {
            handJ2.push(<DownCard key={i}/>)
        }
        return handJ2
    }

    componentDidMount(){
        this.intervalGetMatch = setInterval(() => this.creatHand(), 1000);
    }

    componentWillMount(){
        clearInterval(this.intervalGetMatch);
    }
    
    
    render() {

        if (this.props.handPlayer instanceof Array) {
            
            return (
                
                <div className="hand">
                    {this.state.hand}
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
