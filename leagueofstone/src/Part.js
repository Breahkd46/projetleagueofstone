import React, { Component } from "react";
import "./stylesheets/Part.css";

import ButtonTimer from "./ButtonTimer";
import JoueurAdverse from "./JoueurAdverse";
import JoueurPrincipal from "./JoueurPrincipal";

import axios from "axios";
import {RELOAD_TIME, SERVER_URL} from "./consts";
import {connect} from 'react-redux';

class Part extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player1: "",
            player2: ""

        }
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.reloadMatch(),
            RELOAD_TIME
        );
        this.loadMatch();
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    reloadMatch() {
        if (this.state.player2.turn) {
            this.loadMatch();
        }
    }

    loadMatch() {
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



    handleEndTurn() {
        axios
            .get(
                SERVER_URL + "/match/endTurn?token=" +
                this.props.sessionToken.token
            ).then( res => {
            if (res.data.status === "ok") {
                console.log(res.data.data);

                // this.props.history.push(process.env.PUBLIC_URL + "/");
            } else {
                console.log(res.data.message);
            }
        });
        this.loadMatch();
    }

    render() {
        return (
            <div className="newBase">
                <div className="container">
                    <div className="row">
                        <JoueurAdverse player={this.state.player2}/>
                    </div>
                    <div className="col">
                        <button onClick={this.handleEndTurn()}>Fin du tour</button>
                    </div>
                    <div className="row">
                        <JoueurPrincipal player={this.state.player1}/>
                    </div>
                    <div className="row">
                        <div className="col">
                            <ButtonTimer/>
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
