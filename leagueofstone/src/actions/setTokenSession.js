
export default function setTokenSession(token, id, email, name) {
    return {
        type: "SET_TOKEN_SESSION",
        token: token,
        id: id,
        email: email,
        name: name,
    };
}
