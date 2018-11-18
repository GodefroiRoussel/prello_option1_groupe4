import asteroid from '../../common/asteroid';
import {
    addCard,
    getCard,
    updateCardTitle,
    updateCardDescription,
    updateCardBillable,
    editContributorCard,
    editLabelCard,
    deleteCard,
    archiveCard,
    editCommentCard

} from './CardActions';

import {
    callUpdateCardsPositionsAfterArchiveOrDelete,
    callAddCardInList,
    callUpdateCardsPositionsAfterArchiveOrDeleteId
} from '../List/ListAsyncActions'

import {addCardInList} from "../List/ListActions";
import {callAddComment, callDeleteComment} from "../Comment/CommentAsyncAction";

export function callGetCard(idCard) {
    return dispatch => asteroid.call('getCard', idCard)
        .then(result => dispatch(getCard(result)));
}

export function callAddCard(data) {
    return dispatch => asteroid.call('addCard', data)
        .then(result => {
            dispatch(callAddCardInList({idList: data.listId, idCard: result}))
            dispatch(addCard({...data, ...{_id: result, isDeletedCard: false, isArchivedCard: false, billable: false, labels: [], checkList:[], assignedUsers:[]}}))
        })
}

export function callUpdateCardTitle(data) {
    return dispatch => asteroid.call('updateCardTitle', data)
        .then(result => dispatch(updateCardTitle(result)))
}

export function callUpdateCardDescription(data) {
    return dispatch => asteroid.call('updateCardDescription', data)
        .then(result => dispatch(updateCardDescription(result)))
}

export function callUpdateCardBillable(data) {
    return dispatch => asteroid.call('updateCardBillable', data)
        .then(result => dispatch(updateCardBillable(result)))
}

export function callDeleteCard(data) {
    return dispatch => asteroid.call('deleteCard', data.idCard)
        .then(result => {
            dispatch(deleteCard(result))
            dispatch(callUpdateCardsPositionsAfterArchiveOrDelete({idList: result.idList, idCardArcOrDel: result._id}))
        })
}

export function callArchiveCard(idCard) {
    return dispatch => asteroid.call('archiveCard', idCard)
        .then(result => {
            dispatch(archiveCard(result))
            dispatch(callUpdateCardsPositionsAfterArchiveOrDeleteId({idList: result.idList, idCardArcOrDel: result._id}))
        })
}

export function callUnarchiveCard(idCard) {
    return dispatch => asteroid.call('unarchiveCard', idCard)
        .then(result => {
            dispatch(unarchiveCard(result))
            //callUpdateCardsPositionsAfterArchiveOrDelete({idList: list, idCardArcOrDel: idCard})
        })
}

export function callAddMemberAssigned(data) {
    return dispatch => asteroid.call('addContributorCard', data)
        .then(result => dispatch(editContributorCard(result)))
}

export function callDeleteMemberAssigned(data) {
    console.log(data)
    return dispatch => asteroid.call('deleteContributorCard', data)
        .then(result => dispatch(editContributorCard(result)))
}

export function callAddLabelCard(data) {
    return dispatch => asteroid.call('addLabelCard', data)
        .then(result => dispatch(editLabelCard(result)))
}

export function callDeleteLabelCard(data) {
    return dispatch => asteroid.call('deleteLabelCard', data)
        .then(result => dispatch(editLabelCard(data)))
}

export function callAddCommentCard(data) { //data = idCard, idComment
    return dispatch => asteroid.call('addCommentCard', data)
        .then(result => {
            dispatch(callAddComment(result))
            dispatch(editCommentCard(result))
        }
        )
}

export function callDeleteCommentCard(data) { //data = idCard, idComment
    return dispatch => asteroid.call('deleteCommentCard', data)
        .then(result => {
            dispatch(editCommentCard(result))
            dispatch(callDeleteComment(result))
        })
}

export function callAddCheckListCard(data){
    return dispatch => asteroid.call('addCheckListCard', data)
}
