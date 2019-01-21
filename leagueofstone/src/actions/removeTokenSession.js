export default function removeTokenSession(token) {
    return {
        type: "REMOVE_TOKEN_SESSION",
        token: token
    };
}
