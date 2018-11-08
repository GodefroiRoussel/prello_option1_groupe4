export const GET_BOARD = 'GET_BOARD';
export const ADD_BOARD = 'ADD_BOARD';

export function getBoard(_id) {
    return {
        type: GET_BOARD,
        _id,
    };
}

export function addBoard(data){
    return{
        type: ADD_BOARD,
        data,
    }
}