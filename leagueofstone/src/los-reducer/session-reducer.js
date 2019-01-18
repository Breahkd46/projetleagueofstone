const initialState = {
  token: "",
  isConnected: false
}

function sessionReducer(state = initialState, action) {
  console.log(state);
    switch (action.type) {
        case "SET_SESSION_TOKEN":
            return {
              ...state,
              token: action.token,
              isConnected: true,
            };
            case "REMOVE_SESSION_TOKEN":
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
