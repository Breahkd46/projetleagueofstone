export default function setMatch(status,player1, player2) {
    return {
        type: "SET_MATCH",
        status: status,
        player1: player1,
        player2: player2,
    };
}
