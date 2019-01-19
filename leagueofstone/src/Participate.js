import React, { Component } from "react";

import ButtonParticipate from './ButtonParticipate';
import ButtonUnParticipate from './ButtonUnParticipate';
import ListMatchmacking from './ListMatchmacking';
import ListRequest from './ListRequest';

// Requete Server
// import axios from "axios";
// import { SERVER_URL } from "./consts";

// Redux
import { connect } from 'react-redux';


class Participate extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     request: []
  //   };
  // }

  render() {
    if (this.props.matchmaking.matchmakingId === "") {
      return (
        <ButtonParticipate />
      );
    } else {
      return (
        <div>
          <ListMatchmacking />
          <ListRequest requests={this.props.matchmaking.request} />
          <ButtonUnParticipate />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return { matchmaking: state.matchmakingReducer}
}

// const mapDispatchToProps = dispatch => {
//   return {
//     setMatchmacking: matchmakingId => {
//       dispatch(setMatchmacking(matchmakingId))
//     }
//   }
// }
export default connect(mapStateToProps,null)(Participate)
