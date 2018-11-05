export const ADD_BOARD = 'ADD_BOARD';

export function addBoard(data) {
    console.log('boardAction');
    return {
        type: ADD_BOARD,
        data,
    };
}