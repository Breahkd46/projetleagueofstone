import React, { Component } from "react";

import Logout from "./Logout";
import Unsubscribe from './Unsubscribe';
import Participate from './Participate';
import HandsCards from "./HandsCards";
import Part from './Part';

// Redux
import { connect } from 'react-redux';
// import setMatch from './actions/updateMatch';

import "./Game.css";
import Match from "./Match";
import Compte from "./Compte";
import ListeCartes from "./ListeCartes";

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "accueil"
        }
        this.handleCompte = this.handleCompte.bind(this);
        this.handleListeCartes = this.handleListeCartes.bind(this);
        this.handleAccueil = this.handleAccueil.bind(this);
    }

    handleCompte() {
        this.setState({
            status: "compte"
        })
    }

    handleAccueil() {
        this.setState({
            status: "accueil"
        })
    }

    handleListeCartes() {
        this.setState({
            status: "cartes"
        })
    }

  render() {
    if(this.props.matchmaking.match !== null) {
      return (
          <div>
            <Match />
          </div>
      );
    } else {
        const onglet = () => {
            switch (this.state.status) {
                case "accueil":
                    return  (<Participate />);
                case "compte":
                    return (<Compte />);
                case "cartes":
                    return (<ListeCartes />);
                default:
                    return (<div><p>Error</p></div>)
        }


        }
      return (
        <div className="App">
          <header className="App-header">
          <ul className="menu">
              <li><a onClick={this.handleAccueil} href={"#Accueil"} >Accueil</a></li>
              <li><a onClick={this.handleCompte} href={"#Compte"} >Compte</a></li>
              <li><a onClick={this.handleListeCartes} href={"#ListeCartes"}>Liste de cartes</a></li>
              <li><a href="/logout">Se déconnecter</a></li>
            </ul>
            <h2>League of Stones</h2>
            <p>Bienvenue</p>
          </header>
            <Participate />
          <div className="base">
            <Unsubscribe />
          </div>
          <div className="plateau">
            <Part />
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    match: state.matchReducer,
    matchmaking: state.matchmakingReducer
  }
};

// const mapDispatchToProps = dispatch => {
//   return {
//     setMatch: matchmakingId => {
//       dispatch(setMatch(matchmakingId))
//     }
//   }
// };
export default connect(mapStateToProps,null)(Game)
