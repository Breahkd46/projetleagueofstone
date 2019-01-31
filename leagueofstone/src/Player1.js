import React, {Component} from "react";

import Card from './Card'
import CardVisible from './CardVisible';
import HandsCards from './HandsCards';

class Player1 extends Component{
    constructor(props){
      super(props);
      this.state={
        hp : 150,
        hand : HandsCards.state.handsCardsJ1,
        board : CardVisible.state.tabCard,
        deck : [],
        cardPicked : false,
        turn : false
      }
    }

    playCard(card){
      if(this.state.turn == true){
        //Ajout de la carte avec comme key 'card' sur le plateau
        //Suppr de la mm carte dans la main
        let tab = CardVisible.state.tabCard;
        tab.push(card);
        let hand = HandsCards.state.handsCardsJ1;
        let index = hand.indexOf(card.target.value);
        hand.splice(index,1)
        CardVisible.setState({
          tabCard : tab
        })
        HandsCards.setState({
          handsCardsJ1 : hand
        })
      }
    }

    render(){
      return(
          <CardVisible />
      )
    }
}
export default Player1
