import React, {Component} from "react";

import Card from './Card';

import './Game.css'

class TestBoard extends Component{
  constructor(props){
    super(props);
    this.state={
      hpJ1 : 150,
      handJ1 : [],
      boardJ1 : ['Alistar','Camille', 'Olaf', 'Warwick','Zed','Thresh'],
      hpJ2 : 150,
      handJ2 : [],
      boardJ : [],
      turn : 'J1'
    }
  }

    playCard(card){
      if(this.state.turn == 'J1'){
        let board = this.state.boardJ1;
        board.push(card);
        let hand = this.state.handJ1;
        let index = hand.indexOf(card.target.value);
        hand.splice(index,1)
        this.setState({
          handJ1 : hand,
          boardJ1 : board
        })
      }
    }

    render(){
      return(
        <div className='plateau'>
        {this.state.boardJ1.map((champ) =>{
          return <Card img={champ} name={champ}/>;
        })}
        </div>
      )
    }
  }

export default TestBoard
