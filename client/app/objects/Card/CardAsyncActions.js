import asteroid from '../../common/asteroid';
import { addCard, getCard, updateCardTitle, updateCardDescription, updateCardBillable } from './CardActions';
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
    return dispatch => asteroid.call('updateCard', data)
        .then(result => dispatch(updateCardTitle(result)))
}

export function callUpdateCardDescription(data) {
    return dispatch => asteroid.call('updateCard', data)
        .then(result => dispatch(updateCardDescription(result)))
}

export function callUpdateCardBillable(data) {
    return dispatch => asteroid.call('updateCard', data)
        .then(result => dispatch(updateCardBillable(result)))
}

export function deleteCard(list, card) {
    return dispatch => asteroid.call('updateCard', card)
        .then(result => {
            dispatch(deleteCard(result))
            callUpdateCardsPositionsAfterArchiveOrDelete({list: list, idCardArcOrDel: result}) //result or result.id ?
        })
}



