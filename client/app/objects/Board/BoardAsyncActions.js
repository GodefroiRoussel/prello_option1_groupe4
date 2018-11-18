import asteroid from '../../common/asteroid';
import { getBoard, 
    addBoard, 
    updateCanComment , 
    updateBoardListId, 
    updateBoardListsPosition, 
    updateListsPositionsAfterDeleteOrArchive, 
    editFavoriteBoards, 
    updateBoardTitle,
    updateInvitationsOpenedBoard,
    updateTeamBoard,
    updateLabelBoard} from './BoardActions';

export function callGetBoard(idBoard) {
    return dispatch => asteroid.call('getBoard', idBoard)
        .then(result => dispatch(getBoard(result)));
}

export function callAddBoard(data) {
    console.log(data)
    let finaldata = {...data, ...{admins:[data.user], members:[data.user], listsId:[]}};
    if(data.team){
        finaldata = {...data, ...{teams:[data.team], admins:[data.user], members:[data.user], listsId:[]}}
    }
    return dispatch => asteroid.call('addLabel')
        .then(result => asteroid.call('addBoard', {...{labels: [result]}, ...finaldata})
            .then(result2 => dispatch(addBoard({ ...{_id: result2, labels: [result]}, ...finaldata})))
    )
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

export function callUpdateCanComment(data){
    return dispatch => asteroid.call('updateCanComment', data)
        .then(result => dispatch(updateCanComment(data)))
}

export function callUpdateInvitationsOpenedBoard(data){
    return dispatch => asteroid.call('updateInvitationsOpenedBoard', data)
        .then(result => dispatch(updateInvitationsOpenedBoard(data)))
}

export function callUpdateTeamBoard(data){
    return dispatch => asteroid.call('updateTeamBoard', data)
        .then(result => dispatch(updateTeamBoard(data)))
}

export function callUpdateLabelBoard(data){
    return dispatch => asteroid.call('updateLabelBoard', data)
        .then(result => dispatch(updateLabelBoard(data)))
}

export function callUpdateColorLabel(data){
    
}