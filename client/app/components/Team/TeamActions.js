/*
 * action types
 */

export const ADD_TEAM = 'ADD_TEAM';
export const GET_ALL_TEAM = 'GET_ALL_TEAM';

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