import asteroid from '../../common/asteroid';
import {
    addCard,
    getCard,
    updateCardTitle,
    updateCardDescription,
    updateCardBillable,
    editContributorCard, editLabelCard
} from './CardActions';
import {callUpdateCardsPositionsAfterArchiveOrDelete, callAddCardInList} from '../List/ListAsyncActions'

export function callGetCard(idCard) {
    return dispatch => asteroid.call('getCard', idCard)
        .then(result => dispatch(getCard(result)));
}

export function callAddCard(data) {
    return dispatch => asteroid.call('addCard', data)
        .then(result => {
            dispatch(addCard({...data, ...{_id: result, isDeletedCard: false, isArchivedCard: false, billable: false}}))
            callAddCardInList({idList: data.listId, idCard: result})})
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

export function deleteCard(list, card) {
    return dispatch => asteroid.call('updateCard', card)
        .then(result => {
            dispatch(deleteCard(result))
            callUpdateCardsPositionsAfterArchiveOrDelete({list: list, idCardArcOrDel: result}) //result or result.id ?
        })
}

export function callAddMemberAssigned(data) {
    return dispatch => asteroid.call('addContributorCard', data)
        .then(result => dispatch(editContributorCard(result)))
}

export function callDeleteMemberAssigned(data) {
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


