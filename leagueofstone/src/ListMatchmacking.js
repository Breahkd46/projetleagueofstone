import React, { Component } from "react";

// Redux
import { connect } from 'react-redux';

// Requete Server
import axios from "axios";
import { SERVER_URL } from "./consts";

class ListMatchmacking extends Component {

  constructor(props) {
    super(props);

    this.state = {
      players: []
    }
  }

  componentWillMount() {
    axios
      .get(
        SERVER_URL + "/matchmaking/getAll?token=" +
        this.props.sessionToken.token
      )
      .then(res => {
        if (res.data.status === "ok") {
          this.setState({
            players: res.data.data
          })
          // this.props.history.push(process.env.PUBLIC_URL + "/");
        } else {
          console.log(res.data.message);
        }
      });
  }

  render() {
    return (
      <div> Tableau des joueurs en attente </div>
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
export default connect(mapStateToProps,null)(ListMatchmacking)
