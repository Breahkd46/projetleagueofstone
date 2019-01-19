import React, { Component } from "react";

// Redux
import { connect } from 'react-redux';

// Requete Server
import axios from "axios";
import { SERVER_URL } from "./consts";

class ListRequest extends Component {

  render() {
    console.log(this.props.matchmaking.request);
    return (
      <div>Request</div>
    )
  }
}

const mapStateToProps = state => {
  return {
    matchmaking: state.matchmakingReducer,
    sessionToken: state.sessionReducer
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     setMatchmacking: matchmakingId => {
//       dispatch(setMatchmacking(matchmakingId))
//     }
//   }
// }
export default connect(mapStateToProps,null)(ListRequest)
