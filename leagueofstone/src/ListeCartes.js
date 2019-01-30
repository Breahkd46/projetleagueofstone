import React, { Component } from "react";

// Redux
import { connect } from 'react-redux';
// import setMatch from './actions/updateMatch';

import "./Game.css";
import axios from "axios";
import {SERVER_URL} from "./consts";
import Card from "./Card";
import './stylesheets/makeDeck.css'

class ListeCartes extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            isLoaded: false,
        }
    }
    componentDidMount() {
        axios
            .get(
                SERVER_URL + "/cards/getAll?token="
            )
            .then(res => {
                if (res.data.status === "ok") {
                    console.log(res.data.data);
                    // this.props.history.push(process.env.PUBLIC_URL + "/");
                    this.setState({
                        isLoaded: true,
                        cards: res.data.data,
                    });
                } else {
                    console.log(res.data.message);
                }
            });
    }

    render() {
        if (this.state.isLoaded) {
            return (
                <div>
                    {this.state.cards.map((card,index) => { return (
                        <Card className={"item"} key={index}
                              name={card.name}
                              img={card.key}
                              info={card.stats}
                              onClick={null}/>
                    )})}
                </div>
            )
        } else {
            return (
                <div>
                    <p>Chargement...</p>
                </div>
            )
        }

    }
}

const mapStateToProps = state => {
    return {
        sessionToken: state.sessionReducer

    }
};

// const mapDispatchToProps = dispatch => {
//   return {
//     setMatch: matchmakingId => {
//       dispatch(setMatch(matchmakingId))
//     }
//   }
// };
export default connect(mapStateToProps,null)(ListeCartes)