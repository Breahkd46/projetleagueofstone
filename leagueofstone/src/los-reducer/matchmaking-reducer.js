const initialState = {
  matchmakingId: "",
  request: [],
  match: null
}

function matchmakingReducer(state = initialState, action) {
    switch (action.type) {
        case "INIT_MATCHMAKING":
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
              match: null
            };
        case "SET_MATCHMAKING":
            return {
              ...state,
              match: action.match
            };
        default:
            return state;
    }
}
export default matchmakingReducer
