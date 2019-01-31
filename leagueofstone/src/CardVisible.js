import React, {Component} from "react";
import Card from './Card.js'
import './Game.css'

class CardVisible extends Component{

  constructor(props){
    super(props);
    this.state={
      tabCard : ['Alistar','Camille', 'Olaf', 'Warwick','Zed','Thresh']
    }
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
