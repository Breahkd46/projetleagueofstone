import React, { Component } from "react";
import "./stylesheets/Part.css";
import "./stylesheets/Joueur.css";

import ButtonTimer from "./ButtonTimer";
import JoueurAdverse from "./JoueurAdverse";
import JoueurPrincipal from "./JoueurPrincipal";

import axios from "axios";
import {SERVER_URL} from "./consts";
import { connect } from 'react-redux';

class Part extends Component {
  constructor(props) {
      super(props);
      this.state = {
          player1: "",
          player2: ""

      }
  }
   componentDidMount() {
       axios
         .get(
            SERVER_URL + "/match/getMatch?token=" +
               this.props.sessionToken.token
        )
           .then(res => {
               if (res.data.status === "ok") {
                   console.log(res.data.data.player1);
                   if (this.props.sessionToken.id === res.data.data.player1.id) {
                       this.setState({
                           player1: res.data.data.player1,
                           player2: res.data.data.player2
                       })
                   } else {
                       this.setState({
                           player1: res.data.data.player2,
                           player2: res.data.data.player1
                       })
                   }

                   // this.props.history.push(process.env.PUBLIC_URL + "/");
               } else {
                   console.log(res.data.message);
               }
          });
   }

    handlePlayCard(){
        axios
          .get(
              SERVER_URL + "/match/getMatch?token=" +
               this.props.sessionToken.token
           )
           .then(res => {
               if (res.data.status === "ok") {
                   console.log(res.data.data);
                   this.props.updateMatch(res.data.data.status, res.data.data.player1, res.data.data.player2);
               } else {
                   console.log(res.data.message);
               }
           });
         }

    render() {
        return (
            <div className="plateau">
                <div classname="center">
                    <div className="adversaire">
                        <JoueurAdverse player={this.state.player2}/>
                    </div>
                    }
                    <div className="row">
                        <JoueurPrincipal player={this.state.player1} handlePlayCard={this.handlePlayCard}/>
                    </div>
                    {/* <div className="bouton">
                        <div className="timer">
                            Timer
                            <ButtonTimer/>
                        </div>
                        <div className="finTour">
                            Fin de tour
                        </div>
                    </div> */}
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        match: state.matchReducer,
        sessionToken: state.sessionReducer

    }
};

  export default connect(mapStateToProps, null)(Part)
