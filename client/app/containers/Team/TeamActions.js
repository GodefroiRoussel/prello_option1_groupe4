/*
 * action types
 */

export const ADD_TEAM = 'ADD_TEAM';
export const GET_ALL_TEAM = 'GET_ALL_TEAM';
export const SET_ACTIVE_ITEM = 'SET_ACTIVE_ITEM';

export function addTeam(data) {
    return {
      type: ADD_TEAM,
      data,
    };
  }

export function getAllTeam(data){
    return {
        type: GET_ALL_TEAM,
        data,
    };
}

export function setActiveItem(data){
    return {
        type: SET_ACTIVE_ITEM,
        data,
    };
}