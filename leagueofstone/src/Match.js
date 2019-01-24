import React, { Component } from "react";

import setMatch from "./actions/setMatch";
import {connect} from "react-redux";

class Match extends Component {
    // constructor(props) {
    //   super(props);
    //
    // }



    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h2>League of Stones</h2>
                    <p>Bienvenue</p> <br></br>
                    <p> Et c'est parti </p>
                    <div> {this.props.matchmaking.match.player1.name}</div>
                    <p> CONTRE </p>
                    <div> {this.props.matchmaking.match.player2.name} </div>
                </header>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        match: state.matchReducer,
        matchmaking: state.matchmakingReducer
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         setMatch: matchmakingId => {
//             dispatch(setMatch(matchmakingId))
//         }
//     }
// }
export default connect(mapStateToProps,null)(Match)
