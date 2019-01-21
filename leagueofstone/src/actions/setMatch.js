export default function setMatch(player1, player2) {
    return {
        type: "SET_MATCH",
        isMatch: true,
        player1: player1,
        player2: player2
    };
}
