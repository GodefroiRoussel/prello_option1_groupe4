export const GET_BOARD = 'GET_BOARD';
export const ADD_BOARD = 'ADD_BOARD';
export const UPDATE_BOARD_LIST = 'UPDATE_BOARD_LIST';
export const RESET = 'RESET';
export const UPDATE_BOARD_LIST_POSITION='UPDATE_BOARD_LIST_POSITION';

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

export function resetBoard(data){
    return{
        type: RESET,
    }
}

export function updateBoardListId(data){
    return{
        type: UPDATE_BOARD_LIST,
        id: data.id,
        listId: data.listsid,
    }
}

export function updateBoardListsPosition(data) {
    return{
        type: UPDATE_BOARD_LIST_POSITION,
        data,
    }
}

export class updateListsPositionsAfterDeleteOrArchive {
}