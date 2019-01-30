import React, { Component } from "react";
// Redux
import { connect } from 'react-redux';
import setMatch from './actions/updateMatch';

import './App.css'
import "./Game.css";
import "./stylesheets/makeDeck.css"
import "./Signin.css"

// import axios from "axios";
import {SERVER_URL} from "./consts";
import Card from "./Card";
import axios from "axios";

class MakeDeck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            deck: [],
            status: "",
            nbCards: 0,
        }

        this.handleClickToDeck = this.handleClickToDeck.bind(this);
        this.handleClickToCards = this.handleClickToCards.bind(this);
        this.handleClickCreateDeck = this.handleClickCreateDeck.bind(this);
    }

    componentDidMount() {
        axios
            .get(
                SERVER_URL + "/cards/getAll?token=" +
                this.props.sessionToken.token
            )
            .then(res => {
                if (res.data.status === "ok") {
                    console.log(res.data.data);
                    // this.props.history.push(process.env.PUBLIC_URL + "/");
                    this.setState({
                        status: "loaded",
                        cards: res.data.data,
                    });
                } else {
                    console.log(res.data.message);
                }
            });
    }

    handleClickToDeck(index) {
        if(this.state.nbCards < 20) {
            const champion = this.state.cards[index];
            this.setState(state => ({
                deck: [...state.deck, champion],
                cards: state.cards
                    .filter((val, i) => i !== index),
                nbCards: state.nbCards + 1,
            }));
        }
    }

    handleClickToCards(index) {
        const champion = this.state.deck[index];

        this.setState(state => ({
            cards: [...state.cards, champion],
            deck: state.deck
                .filter((val, i) => i !== index),
            nbCards: state.nbCards - 1,
        }));
    }

    handleClickCreateDeck() {
        if(this.state.nbCards === 20) {
            const req = [];
            for(let card of this.state.deck) {
                console.log(card)
                req.push({
                    key: card.name
                })
            }
            // req.push({key: this.state.deck.map((champ, index,) => champ.key) });


            console.log(req)
            console.log(JSON.stringify(req))
            const requete = encodeURI(JSON.stringify(req));
            // requete initDeck
            console.log(requete)
            axios
                .get(
                    SERVER_URL + "/match/initDeck?token=" +
                    this.props.sessionToken.token +
                    "&deck=" +
                    requete
                )
                .then(res => {
                    if (res.data.status === "ok") {
                        console.log(res.data.data);
                        // this.props.history.push(process.env.PUBLIC_URL + "/");
                        this.setState({
                            status: "requestSent"
                        })
                    } else {
                        console.log(res.data.message);
                    }
                });
        }

    }

    render() {
        if(this.state.status === "loaded") {
            return (
                <div className={""}>
                    <div>
                        <ul className="menu">
                            <li><h1>Contruisez votre deck</h1></li>
                        </ul>
                    </div>
                    <button className={"button"} onClick={this.handleClickCreateDeck}>Creer le deck</button>
                    <div className="MakeDeck containerMakeDeck">
                        <div className="cadre TabCardsToAdd containerList">
                            <p className={"titreList"}>Collection de cartes</p>
                            <div className={"containerMakeDeck"}>
                                {this.state.cards.map((champ, index) =>
                                    <Card className={"item"} key={index}
                                          name={champ.name}
                                          img={champ.key}
                                          info={champ.stats}
                                          onClick={() => this.handleClickToDeck(index)}/>
                                )}
                            </div>
                        </div>
                        <div className="cadre TabCardsToAdd containerList">
                            <p className={"titreList"}>Mon deck</p>
                            <div className={"containerMakeDeck"}>
                            {this.state.deck.map((champ, index) =>
                                <Card className={"item"} key={index}
                                      name={champ.name}
                                      img={champ.key}
                                      info={champ.info}
                                      onClick={() => this.handleClickToCards(index)}/>
                            )}
                            </div>
                        </div>

                    </div>
                </div>
            )
        } else if(this.state.status === "requestSent") {
            return (
                <div><p>En attente du joueur adverse...</p></div>
                )
        } else {
            return (
                <div><p>Chargement...</p></div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        match: state.matchReducer,
        sessionToken: state.sessionReducer,

    }
};

const mapDispatchToProps = dispatch => {
    return {
        setMatch: matchmakingId => {
            dispatch(setMatch(matchmakingId))
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(MakeDeck)