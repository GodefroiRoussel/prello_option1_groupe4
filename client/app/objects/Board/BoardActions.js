export const GET_BOARD = 'GET_BOARD';
export const ADD_BOARD = 'ADD_BOARD';
export const UPDATE_BOARD_LIST = 'UPDATE_BOARD_LIST';
export const RESET = 'RESET';
export const EDIT_FAV_BOARD = 'EDIT_FAV_BOARD';
export const UPDATE_BOARD_LIST_POSITION='UPDATE_BOARD_LIST_POSITION';
export const EDIT_TITLE_BOARD='EDIT_TITLE_BOARD';
export const EDIT_BOARD='EDIT_BOARD';
export const REMOVE_BOARD='REMOVE_BOARD';
export const EDIT_CAN_COMMENT='EDIT_CAN_COMMENT';
export const EDIT_INVITATION_BOARD='EDIT_INVITATION_BOARD';
export const EDIT_TEAMS_BOARD='EDIT_TEAMS_BOARD';

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

export function removeBoard(_id){
return{
    type: REMOVE_BOARD,
    _id,
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

export function editFavoriteBoards(data) {
    return {
        type: EDIT_FAV_BOARD,
        data
    }
}

export function updateBoardTitle(data){
    return {
        type: EDIT_TITLE_BOARD,
        data,
    };
}

export function editBoard(_id, data){
    return{
        type: EDIT_BOARD,
        _id,
        data,
    };
}

export function updateCanComment(data){
    return{
        type: EDIT_CAN_COMMENT,
        data,
    }
}

export function updateInvitationsOpenedBoard(data){
    return {
        type: EDIT_INVITATION_BOARD,
        data,
    }
}

export function updateTeamBoard(data){
    return{
        type : EDIT_TEAMS_BOARD,
        data,
    }
}