import asteroid from '../../common/asteroid';
import { getBoard, addBoard , updateBoardListId, updateBoardListsPosition, updateListsPositionsAfterDeleteOrArchive, editFavoriteBoards, updateBoardTitle} from './BoardActions';
import {updateListTitle} from "../List/ListActions";

export function callGetBoard(idBoard) {
    return dispatch => asteroid.call('getBoard', idBoard)
        .then(result => dispatch(getBoard(result)));
}

export function callAddBoard(data) {
    let finaldata = {...data, ...{admins:[data.user], members:[data.user], listsId:[]}};
    if(data.team){
        finaldata = {...data, ...{teams:[data.team], admins:[data.user], members:[data.user], listsId:[]}}
    }
    return dispatch => asteroid.call('addBoard', finaldata)
        .then(result => dispatch(addBoard({ ...{_id: result}, ...finaldata})));
}

export function callUpdateBoardListId(id, board){
    return dispatch => asteroid.call('updateBoardListId', {id: board._id, listId: id})
        .then(dispatch(updateBoardListId({id: board._id, listsid: id})));
}

export function callUpdateListPositionInBoard(data){
    return dispatch => asteroid.call('updateListsPositions', data)
        .then(dispatch(updateBoardListsPosition(data)));
}

export function callUpdateListsPositionsAfterArchiveOrDelete(idList, board) {
    return dispatch => asteroid.call('updateListsPositionsAfterArchiveOrDelete',{board: board, idListArchived: idList})
        .then(result => dispatch(updateListsPositionsAfterDeleteOrArchive({board: result})))
}

export function callAddFavoriteBoard(data) { // data = boardId, userId
    return dispatch => asteroid.call('addFavoriteBoard',data)
        .then(result => dispatch(editFavoriteBoards({board: result})))
}

export function deleteAddFavoriteBoard(idList, board) {
    return dispatch => asteroid.call('addFavoriteBoard',{board: board, idListArchived: idList})
        .then(result => dispatch(editFavoriteBoards({board: result})))
}

export function callEditBoardTitle(data) { // data = _id, titleBoard
    return dispatch => asteroid.call('updateBoardTitle', data)
        .then(result => dispatch(updateBoardTitle(data)))
}