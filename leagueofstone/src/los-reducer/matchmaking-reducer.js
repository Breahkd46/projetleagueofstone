const initialState = {
  matchmakingId: "",
  request: []
}

function matchmakingReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_MATCHMACKING":
            return {
              ...state,
              matchmakingId: action.id,
              request: action.request,
            };
        case "UPDATE_MATCHMAKING_REQUEST":
            return {
              ...state,
              request: action.request,
            };
        case "REMOVE_MATCHMAKING":
            return {
              matchmakingId: "",
              request: [],
            };
        default:
            return state;
    }
}
export default matchmakingReducer
