import React, { Component } from "react";

import Logout from "./Logout";
import Unsubscribe from './Unsubscribe';

// Redux
import { connect } from 'react-redux';
// import setMatch from './actions/updateMatch';

import "./Game.css";
import Match from "./Match";

class Compte extends Component {
    // constructor(props) {
    //     super(props);
    //
    // }

    render() {
        return (
            <div className="base">
                <Unsubscribe />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        match: state.matchReducer,
        matchmaking: state.matchmakingReducer
    }
};

// const mapDispatchToProps = dispatch => {
//   return {
//     setMatch: matchmakingId => {
//       dispatch(setMatch(matchmakingId))
//     }
//   }
// };
export default connect(mapStateToProps,null)(Compte)