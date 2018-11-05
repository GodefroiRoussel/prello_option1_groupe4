export const GET_BOARD = 'GET_BOARD';

export function getBoard(_id) {
    return {
        type: GET_BOARD,
        _id,
    };
}