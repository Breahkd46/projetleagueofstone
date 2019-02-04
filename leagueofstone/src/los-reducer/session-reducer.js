const initialState = {
  token: "",
  isConnected: false
}

function sessionReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_TOKEN_SESSION":
            return {
                ...state,
                token: action.token,
                id: action.id,
                name: action.name,
                email: action.email,
                isConnected: true,
            };
        case "REMOVE_TOKEN_SESSION":
            return {
              ...state,
              token: "",
                id: "",
                name: "",
                email: "",
              isConnected: false,
            };
        default:
            return state;
    }
}
export default sessionReducer
