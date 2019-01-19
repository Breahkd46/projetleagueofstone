import React, { Component } from "react";

import ButtonParticipate from './ButtonParticipate';
import ListMatchmacking from './ListMatchmacking';
import ListRequest from './ListRequest';

// Redux
import { connect } from 'react-redux';


class Participate extends Component {

  // constructor(props) {
  //   super(props);
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
          <ListRequest />
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
