export function removeTokenSession(dispatch) {
    dispatch({
        type: "REMOVE_TOKEN_SESSION"
    });
}

export default function setTokenSession(dispatch, token) {
    dispatch({
        type: "SET_TOKEN_SESSION",
        token: token
    });
}
