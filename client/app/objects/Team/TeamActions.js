/*
 * action types
 */

export const ADD_TEAM = 'ADD_TEAM';
export const GET_ALL_TEAM = 'GET_ALL_TEAM';
export const EDIT_TEAM_MEMBERS = 'EDIT_TEAM_MEMBERS';
export const REMOVE_TEAM = 'REMOVE_TEAM';


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

export function editTeamMembers(_id, members){
    return {
        type: EDIT_TEAM_MEMBERS,
        _id,
        members,
    };
}

export function removeTeam(_id) {
    return {
      type: REMOVE_TEAM,
      _id,
    };
  }