import asteroid from '../../common/asteroid';
import {addItem, deleteItem, checkItem} from './ItemActions';
import {callAddItemToCheckList, callDeleteItemFromCheckList} from "../CheckList/CheckListAsyncActions";

export function callAddItem(titleItem, idCheckList) {
    return dispatch => asteroid.call('addItem', titleItem)
        .then(result => {
            dispatch(addItem({_id: result}))
            dispatch(callAddItemToCheckList({idItem: result, idCheckList: idCheckList}))
        });
}

export function callDeleteItem(data) { // data = idCheckList, idItem
    return dispatch => asteroid.call('deleteItem', data)
        .then(result => {
            dispatch(deleteItem(result))
            dispatch(callDeleteItemFromCheckList({idItem: data.idItem, idCheckList: data.idCheckList}))
        });
}

export function callCheckItem(data) { //data: idItem
    return dispatch => asteroid.call('checkItem', data.idItem)
        .then(result => {
            dispatch(checkItem(result)) //result = object item
        });
}