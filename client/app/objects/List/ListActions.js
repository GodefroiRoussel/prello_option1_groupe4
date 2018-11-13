/*
 * action types
 */

export const ADD_LIST = 'ADD_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';
export const GET_ALL_LIST = 'GET_ALL_LIST';
export const EDIT_TITLE_LIST = 'EDIT_TITLE_LIST';
export const EDIT_LIST = 'EDIT_LIST';
export const EDIT_CARD_LIST = 'EDIT_CARD_LIST';
export const EDIT_CARD_POS_LIST = 'EDIT_CARD_POS_LIST';
/*
 * action creators
 */

export function addList(data) {
    return {
      type: ADD_LIST,
      data,
    };
}

export function getAllList(data) {
    return {
      type: GET_ALL_LIST,
      data,
    };
  }

export function removeList(_id){
  return {
    type: REMOVE_LIST,
    _id,
  };
}

export function updateListPosition() {
}

export function updateListTitle(data){
    return {
        type: EDIT_TITLE_LIST,
        data, //data = idList
    };
}
export function updateList(data) {
    return {
        type: EDIT_LIST,
        data,
    }
}
export function deleteList() {
}

export function archiveList() {
}

export function unarchiveList() {
}

export function updateCardsPosArcDel() {
}

export function addCardInList (data){
    return{
        type: EDIT_CARD_LIST,
        data,
    }
}

export function updateCardPositionInList(data){
    return{
        type: EDIT_CARD_POS_LIST,
        data,
    }
}