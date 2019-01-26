const initialState = {
  status : "",
  player1: null,
  player2: null
};

function matchReducer(state = initialState, action) {
    switch (action.type) {
        case "UPDATE_MATCH":
            return {
              ...state,
              status: action.status,
              player1: action.player1,
              player2: action.player2
            };
        default:
            return state;
    }
}
export default matchReducer
