import React, { Component } from "react";

import Unsubscribe from './Unsubscribe';

// Redux
import { connect } from 'react-redux';

import "./Game.css";

class Compte extends Component {
    // constructor(props) {
    //     super(props);
    //
    // }

    render() {
        return (
            <div>
                <div className={"base"}>
                    <p>Nom : {this.props.sessionToken.name}</p>
                    <p>Email : {this.props.sessionToken.email}</p>
                </div>
                <div className="base">
                    <Unsubscribe />
                </div>
            </div>
        )
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
export default connect(mapStateToProps,null)(Compte)