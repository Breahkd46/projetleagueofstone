const initialState = {
  matchmakingId: ""
}

function matchmakingReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_MATCHMACKING":
            return {
              ...state,
              matchmakingId: action.id,
              request: action.request,
            };
        default:
            return state;
    }
}
export default matchmakingReducer
