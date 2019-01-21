const initialState = {
  isMatch: false,
  player1: null,
  player2: null
}

function matchReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_MATCH":
            return {
              ...state,
              isMatch: action.isMatch,
              player1: action.player1,
              player2: action.player2
            };
        default:
            return state;
    }
}
export default matchReducer