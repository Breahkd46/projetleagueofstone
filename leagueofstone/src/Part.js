import React, { Component } from "react";
import "./stylesheets/Part.css";

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
      this.handleAttack = this.handleAttack.bind(this);
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

   handleAttack(){
     axios
      .get(
        SERVER_URL + "/match/attack?token=" +
           this.props.sessionToken.token +
           "&card=" + this.props.handleAttack +
           "&ennemyCard=" + this.props.handleReceive
      )
   }

    render() {
        return (
            <div className="newBase">
                <div className="container">
                    <div className="row">
                        <JoueurAdverse player={this.state.player2} handleReceive = {this.handleReveive}/>
                    </div>
                    }
                    <div className="row">
                        <JoueurPrincipal player={this.state.player1} handleAttack = {this.handleAttack}/>
                    </div>
                    <div className="row">
                        <div className="col">
                            <ButtonTimer/>
                        </div>
                        <div className="col">
                            Fin de tour
                        </div>
                    </div>
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
