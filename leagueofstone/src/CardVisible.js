import React, {Component} from "react";
import Card from './CardHand.js'
import './Game.css'

class CardVisible extends Component{

  constructor(props){
    super(props);
    this.state={
      tabCard : ['Alistar','Camille', 'Olaf', 'Evelynn','Zed']


    }
  }

  poserCard(){
    //Ajoute la carte de la main au plateau
    //Ajoute la carte à this.state.tabCard

  }

  render(){
    return(
      <div className='plateau'>
      {this.state.tabCard.map((champ) =>{
        return <Card img={champ} name={champ}/>;
      })}
      </div>
    )
  }
}
export default CardVisible;