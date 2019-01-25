import React, { Component } from "react";
// Redux
import { connect } from 'react-redux';
import setMatch from './actions/setMatch';

import './App.css'
import "./Game.css";
import "./stylesheets/makeDeck.css"

// import axios from "axios";
// import {SERVER_URL} from "./consts";
import Card from "./Card";

class MakeDeck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            deck: [],
            isLoaded: false,
            nbCards: 0
        }
    }

    componentDidMount() {
        fetch("champion.json")
            .then(response => response.json())
            .then(response => {
                // tab = []
                // for(champion in response) {
                //     cards = {
                //         id: champion.id,
                //         key: champion.key,
                //         name: champion.name,
                //         title: champion.title,
                //         image: champion.image,
                //         skins: champion.skins,
                //         info: champion.info,
                //
                //     }
                // }
                this.setState({
                    isLoaded: true,
                    cards: response
                });
            }).catch(error =>
            console.error("Error : chooseChampions : ", error)
        );

        // axios
        //     .get(
        //         SERVER_URL + "/cards/getAll?token=" +
        //         this.props.sessionToken.token
        //     )
        //     .then(res => {
        //         if (res.data.status === "ok") {
        //             console.log(res.data.data);
        //             // this.props.history.push(process.env.PUBLIC_URL + "/");
        //         } else {
        //             console.log(res.data.message);
        //         }
        //     });
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

    render() {
        if(this.state.isLoaded) {
            return (
                <div className="MakeDeck">
                    <div className="TabCardsToAdd">
                        <p>Cartes du deck</p>
                        {this.state.deck.map((champ, index) =>
                            <Card key={index} name={champ.name} img={champ.name}
                                // choosed={champ.flipped}
                                  onClick={() => this.handleClickToCards(index)}/>
                        )}
                    </div>
                    <div className="Board card-columns TabCardsToAdd">
                        <p>Tab de carte a choisir</p>
                        {this.state.cards.map((champ, index) =>
                            <Card key={index} name={champ.name} img={champ.name}
                                // choosed={champ.flipped}
                                  onClick={() => this.handleClickToDeck(index)}/>
                        )}
                    </div>
                </div>
            )
        } else {
            return (
                <div><p>Loading...</p></div>
                )
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
        setMatch: matchmakingId => {
            dispatch(setMatch(matchmakingId))
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(MakeDeck)