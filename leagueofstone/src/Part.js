import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button"
import "./stylesheets/Part.css";

import ButtonTimer from "./ButtonTimer";
import JoueurAdverse from "./JoueurAdverse";
import JoueurPrincipal from "./JoueurPrincipal";

import axios from "axios";
import {RELOAD_TIME, SERVER_URL} from "./consts";
import {connect} from 'react-redux';
import removeMatch from "./actions/removeMatch";
import removeMatchmaking from "./actions/removeMatchmaking";

class Part extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusGame: "",
            J1isJ1: true,
            player1: "",
            player2: "",
            attackSrc: "",
            attackDest: "",
        }
        this.handleEndTurn = this.handleEndTurn.bind(this);
        this.handlePickCard = this.handlePickCard.bind(this);
        this.handlePlayCard = this.handlePlayCard.bind(this);
        this.handleAttackDest = this.handleAttackDest.bind(this)
        this.handleAttackSource = this.handleAttackSource.bind(this);
        this.handleFinishGame = this.handleFinishGame.bind(this);
    }

    async componentDidMount() {
        this.intervalID = setInterval(
            () => this.reloadMatch(),
            RELOAD_TIME
        );
        await this.loadMatch();
        this.heroHPControler(this.state.player1,this.state.player2);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    reloadMatch() {
        console.log(this.state.player2.turn)
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
                            J1isJ1: true,
                            statusGame: res.data.data.status,
                            player1: res.data.data.player1,
                            player2: res.data.data.player2
                        })
                    } else {
                        this.setState({
                            J1isJ1: false,
                            statusGame: res.data.data.status,
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

    handlePickCard() {
        axios
            .get(
                SERVER_URL + "/match/pickCard?token=" +
                this.props.sessionToken.token
            ).then( res => {
            if (res.data.status === "ok") {
                console.log(res.data.data);

                // this.props.history.push(process.env.PUBLIC_URL + "/");
            } else {
                console.log(res.data.message);
            }
        });
        this.loadMatch()
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

    handlePlayCard() {
        this.loadMatch()
    }

    heroHPControler(j1, j2) {
        if (j1.hp < 0 || j2.hp < 0) {
            this.loadMatch()
            return true
        }
        return false
    }

    handleFinishGame() {
        axios
            .get(
                SERVER_URL + "/match/finishMatch?token=" +
                this.props.sessionToken.token
            )
            .then(res => {
                if (res.data.status === "ok") {
                    console.log(res.data.data);
                    this.props.removeMatch("");
                    this.props.removeMatchmaking("");
                    // this.props.history.push(process.env.PUBLIC_URL + "/");
                } else {
                    console.log(res.data.message);
                }
            });
    }

    changeStateAfterAttack(p1, p2) {
        const j1 = this.state.J1isJ1?p1:p2;
        const j2 = this.state.J1isJ1?p2:p1;

        this.setState(state => ({
            player1: {
                ...state.player1,
                board: j1.board,
                hp: j1.hp,
            },
            player2: {
                ...state.player2,
                board: j2.board,
                hp: j2.hp,
            }
        }));
        if (this.heroHPControler(j1,j2)) {
            this.loadMatch();
        }

    }

    attack() {
        console.log(this.state.attackSrc)
        console.log(this.state.attackDest)
        if (this.state.attackSrc !== "" &&
            this.state.attackDest !== "") {
            if (this.state.attackDest === "hero") {
                axios
                    .get(
                        SERVER_URL + "/match/attackPlayer?token=" +
                        this.props.sessionToken.token +
                        "&card=" +
                        this.state.attackSrc
                    )
                    .then(res => {
                        if (res.data.status === "ok") {
                            console.log(res.data.data);
                            this.changeStateAfterAttack(res.data.data.player1,res.data.data.player2);
                            // this.props.history.push(process.env.PUBLIC_URL + "/");
                        } else {
                            console.log(res.data.message);
                        }
                    });
            } else {
                axios
                    .get(
                        SERVER_URL + "/match/attack?token=" +
                        this.props.sessionToken.token +
                        "&card=" +
                        this.state.attackSrc +
                        "&ennemyCard=" +
                        this.state.attackDest
                    )
                    .then(res => {
                        if (res.data.status === "ok") {
                            console.log(res.data.data);
                            this.changeStateAfterAttack(res.data.data.player1,res.data.data.player2);
                            // this.props.history.push(process.env.PUBLIC_URL + "/");
                        } else {
                            console.log(res.data.message);
                        }
                    });
            }
        }
    }

    async handleAttackSource(card) {
        console.log(card)
        await this.setState({
            attackSrc: card
        })
        this.attack()
    }

    async handleAttackDest(card) {
        console.log(card)
        await this.setState({
            attackDest: card
        })
        this.attack()
    }


    render() {
        if (this.state.player1 === "") {
            return (<p>Chargement...</p>);
        } else {
            return (
                <div className="plateau">
                    <div className="center">
                        <div className="adversasire">
                            <JoueurAdverse player={this.state.player2}
                                           handleAttackDest={this.handleAttackDest}/>
                        </div>
                        {/*<div className="col">*/}
                        {/*<button onClick={this.handlePickCard()}>Pioche</button>*/}
                        {/*</div>*/}
                        {/*<div className="col">*/}
                        {/*<button onClick={this.handleEndTurn()}>Fin du tour</button>*/}
                        {/*</div>*/}
                        <div className="principal">
                            <JoueurPrincipal handlePickCard={this.handlePickCard}
                                             handleEndTurn={this.handleEndTurn}
                                             handlePlayCard={this.handlePlayCard}
                                             handleAttackSource={this.handleAttackSource}
                                             player={this.state.player1}/>
                        </div>
                        <div className="bouton">
                            <div className="timer">
                                <ButtonTimer/>
                            </div>
                        </div>
                    </div>

                    <Modal show={this.state.statusGame === "Player 1 won" || this.state.statusGame === "Player 2 won"}
                           onHide={this.handleFinishGame} >
                        {/*<Modal.Header closeButton>*/}
                            {/*<Modal.Title>Modal heading</Modal.Title>*/}
                        {/*</Modal.Header>*/}
                        <Modal.Body> {this.state.statusGame.substring(7,8) === "1"? (
                            this.state.J1isJ1?this.state.player1.name:this.state.player2.name
                        ):(
                            this.state.J1isJ1?this.state.player2.name:this.state.player1.name
                        )} a gagné </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleFinishGame}>
                                Retour a la page d'accueil
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            );
        }

    }

}

const mapStateToProps = state => {
    return {
        match: state.matchReducer,
        sessionToken: state.sessionReducer
    }
};

const mapDispatchToProps = dispatch => {
    return {
        removeMatch: (status, player1, player2) => {
            dispatch(removeMatch(status, player1, player2))
        },
        removeMatchmaking: (token) => {
            dispatch(removeMatchmaking(token))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Part)
