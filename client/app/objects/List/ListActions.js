/*
 * action types
 */

export const ADD_LIST = 'ADD_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';
export const GET_ALL_LIST = 'GET_ALL_LIST';
export const EDIT_TITLE_LIST = 'EDIT_TITLE_LIST';
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

export class updateListPosition {
}
/*
export class updateListTitle(data){
    return {
        type: EDIT_TITLE_LIST,
        data, //data = idList
    };
}*/
export class deleteList {
}

export class updateListTitle {
}

export class archiveList {
}

export class unarchiveList {
}