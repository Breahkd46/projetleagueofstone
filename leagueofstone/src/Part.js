import React, { Component } from "react";
import "./stylesheets/Part.css";

import ButtonTimer from "./ButtonTimer";
import JoueurAdverse from "./JoueurAdverse";
import JoueurPrincipal from "./JoueurPrincipal";

import axios from "axios";
import {SERVER_URL} from "./consts";

class Part extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleAttack(){
      axios
        .get(
          SERVER_URL + "/match/attack?token="+
            this.props.sessionToken.token + "&card="
        )
    }

    render() {
      return (
        <div class="newBase">
          <div class="container">
              <div class="row">
                  <JoueurAdverse handleReceive = {this.handleReveive}/>
              </div>
              <div class="row">
                <JoueurPrincipal handleAttack = {this.handleAttack}/>
              </div>
              <div class="row">
                <div class="col">
                <ButtonTimer />
                </div>
                <div class="col">
                  Fin de tour
                </div>
              </div>
          </div>
        </div>
      );
    }

}

  export default Part
