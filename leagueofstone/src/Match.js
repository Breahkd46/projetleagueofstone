import React, { Component } from "react";

// import setMatch from "./actions/setMatch";
import {connect} from "react-redux";

import './App.css'

class Match extends Component {
    // constructor(props) {
    //   super(props);
    //
    // }



    render() {
        if (this.props.match.status == "Deck is pending") {
            return (
                <div>
                    <p>Constituer son deck</p>
                </div>
            )
        }else if(status) {
            return (
                <div >
                    <header >
                        <h2>League of Stones</h2>
                        <p>Bienvenue</p> <br />
                        <p> Et c'est parti </p>
                        <div> {this.props.matchmaking.match.player1.name}</div>
                        <p> CONTRE </p>
                        <div> {this.props.matchmaking.match.player2.name} </div>
                    </header>
                </div>
            )
        }

    }
    // render() {
    //     return (
    //         <div>
    //             <p>CouCOU</p>
    //         </div>
    //     )
    // }
}

const mapStateToProps = state => {
    return {
        match: state.matchReducer,
        matchmaking: state.matchmakingReducer
    }
};

// const mapDispatchToProps = dispatch => {
//     return {
//         setMatch: matchmakingId => {
//             dispatch(setMatch(matchmakingId))
//         }
//     }
// }
export default connect(mapStateToProps,null)(Match)
