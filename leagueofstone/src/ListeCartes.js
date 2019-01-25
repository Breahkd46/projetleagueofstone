import React, { Component } from "react";

// Redux
import { connect } from 'react-redux';
// import setMatch from './actions/updateMatch';

import "./Game.css";

class ListeCartes extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div></div>
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
export default connect(mapStateToProps,null)(ListeCartes)