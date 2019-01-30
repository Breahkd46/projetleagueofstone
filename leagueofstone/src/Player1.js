import React, {Component} from "react";

import CardVisible from './CardVisible';

class Player1 extends Component:
    constructor(props){
      super(props);
      this.state={
        hp : 30
        hand : []
        board : this.CardVisible.tabCard
        deck : []
        cardPicked : False
        turn : False
      }
    }

    render(){
      return(
        <div>
          <CardVisible />
        </div>
      )
    }
