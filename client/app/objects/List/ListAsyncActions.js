import asteroid from '../../common/asteroid';
import { addList, getAllList, removeList, updateListPosition, updateListTitle,deleteList, archiveList, unarchiveList, updateCardsPosArcDel, addCardInList, updateCardPositionInList, updateCardPositionBetweenList } from './ListActions';
import { callUpdateBoardListId, callUpdateListsPosition, callUpdateListsPositionsAfterArchiveOrDelete} from '../Board/BoardAsyncActions';

export function callAddList(data, board) {
  return dispatch => asteroid.call('addList', data)
      .then(result => {
          dispatch(addList({ ...{_id: result, cards: []}, ...data }))
          dispatch(callUpdateBoardListId(result, board))
        });
}
export function callUpdatePositionList(data, board) {
    return dispatch => asteroid.call('updateList', data)
        .then(result => {
            dispatch(updateListPosition({ ...{_id: result}, ...data}))
            dispatch(callUpdateListsPosition(result, board))
        })
}
export function callGetAllList() {
    return dispatch => asteroid.call('getList')
        .then(result => dispatch(getAllList(result)));
  }

export function callRemoveList(_id) {
    return dispatch => asteroid.call('removeList', _id)
        .then(() => dispatch(removeList(_id)));
}

export function callEditListTitle(data) {
    return dispatch => asteroid.call('updateListTitle', data)
        .then(result => dispatch(updateListTitle(result)))
}

export function callDeleteUnarchivedList(data, board) {
    return dispatch => asteroid.call('updateList', data)
        .then(result => {
            dispatch(deleteList(result))
            dispatch(callUpdateListsPositionsAfterArchiveOrDelete(result, board))
        })
}

export function callArchiveList(data, board) {
    return dispatch => asteroid.call('updateList', data)
        .then(result => {
            dispatch(archiveList(result))
            dispatch(callUpdateListsPositionsAfterArchiveOrDelete(result, board))
        })
}

export function callUnarchiveList(data, board) {
    return dispatch => asteroid.call('unarhiveList', data)
        .then(result => {
            dispatch(unarchiveList(result))
            //TODO: add the function that give the position of the list (end)
        })
}

export function callUpdateCardsPositionsAfterArchiveOrDelete (idCard, list) {
    return dispatch => asteroid.call('updateCardsPositionsAfterArchiveOrDelete', {list: list, idCardArcOrDel: idCard})
        .then(result => dispatch(updateCardsPosArcDel({list: result})))
}

export function callAddCardInList(data) {
    return dispatch => asteroid.call('addCardInList', data)
        .then(result => {
            dispatch(addCardInList(data))
        })
}

export function callUpdateCardPositionInList(data){
    return dispatch => {
            dispatch(updateCardPositionInList(data));
            asteroid.call('updateCardPositionInList', data)
            .then(result => {
                console.log("ok")
            })
    }
}

export function callUpdateCardPositionBetweenList(data){
    return dispatch => {
        dispatch(updateCardPositionBetweenList(data));
        asteroid.call('updateCardPositionBetweenList', data)
            .then(result => {
                console.log("ok")
            })
    }
}