export default function initMatchmaking(id, request) {
    return {
        type: "INIT_MATCHMAKING",
        id: id,
        request: request
    };
}
