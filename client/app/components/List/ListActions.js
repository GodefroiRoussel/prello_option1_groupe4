/*
 * action types
 */

export const ADD_LIST = 'ADD_LIST';
export const GET_ALL_LIST = 'GET_ALL_LIST';

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