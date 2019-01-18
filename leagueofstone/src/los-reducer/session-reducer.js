const initialState = {
  token: "",
  isConnected: false
}

function sessionReducer(state = initialState, action) {
    console.log(action.type);
    console.log(action.token);
    switch (action.type) {
        case "SET_TOKEN_SESSION":
            return {
              ...state,
              token: action.token,
              isConnected: true,
            };
        case "REMOVE_TOKEN_SESSION":
            return {
              ...state,
              token: "",
              isConnected: false,
            };
        default:
            return state;
    }
}
export default sessionReducer
