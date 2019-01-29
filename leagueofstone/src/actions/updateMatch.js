export default function updateMatch(status,player1, player2) {
    return {
        type: "UPDATE_MATCH",
        status: status,
        player1: player1,
        player2: player2,
    };
}
