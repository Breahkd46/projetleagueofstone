import React, {Component} from "react";
import Card from './Card.js'
import './Game.css'

import axios from "axios";
import {SERVER_URL} from "./consts";

class CardVisible extends Component{

  constructor(props){
    super(props);
    this.state={
      board : ['Alistar','Camille', 'Olaf', 'Warwick','Zed','Thresh']
    }
  }


  render(){
    return(
      <div className='plateau'>
        {this.state.board.map((champ, index) =>{
          return <Card key={index} img={champ.key} name={champ.key} onClick={() => this.props.handleCard(champ.key)}/>;
        })}
      </div>
    )
  }
}


export default CardVisible;
