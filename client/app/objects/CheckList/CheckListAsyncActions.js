import asteroid from '../../common/asteroid';
import {addCheckList, editListItems, deleteCheckList} from './CheckListAction';

export function callAddCheckList(titleCheckList) {
    return dispatch => asteroid.call('addCheckList', titleCheckList)
        .then(result => {
            dispatch(addCheckList({_id: result}))
        });
}

export function callAddItemToCheckList(data) { // data = idCheckList, idItem
    return dispatch => asteroid.call('addItemToCheckList', data)
        .then(result => {
            dispatch(editListItems(result))
        });
}

export function callDeleteItemFromCheckList(data) { // data = idCheckList, idItem
    return dispatch => asteroid.call('deleteItemFromCheckList', data)
        .then(result => {
            dispatch(editListItems(result))
        });
}

export function callDeleteCheckList(id) {
    return dispatch => asteroid.call('deleteCheckList', id)
        .then(result => {
            dispatch(deleteCheckList(result))
        });
}