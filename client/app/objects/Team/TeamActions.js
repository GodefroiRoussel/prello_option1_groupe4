/*
 * action types
 */

export const ADD_TEAM = 'ADD_TEAM';
export const GET_ALL_TEAM = 'GET_ALL_TEAM';
export const EDIT_TEAM_MEMBERS = 'EDIT_TEAM_MEMBERS';
export const REMOVE_TEAM = 'REMOVE_TEAM';
export const ACTIVE_INDEX = 'ACTIVE_INDEX';
export const RESET='RESET';
export const EDIT_TEAM_VISIBILITY = 'EDIT_TEAM_VISIBILITY';
export const DELETE_TEAM_MEMBERS = 'DELETE_TEAM_MEMBERS';
export const EDIT_TEAM = 'EDIT_TEAM';


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

export function editTeamMembers(data){
    return {
        type: EDIT_TEAM_MEMBERS,
        data,
    };
}

export function removeTeam(_id) {
    return {
      type: REMOVE_TEAM,
      _id,
    };
  }

export function setActiveIndex(data) {
    return {
        type: ACTIVE_INDEX,
        data,
    };
}

export function resetTeam(){
    return{
        type: RESET,
    }
}

export function updateVisibilityTeam(data){
    return{
        type: EDIT_TEAM_VISIBILITY,
        data,
    };
}

export function deleteMemberTeam(data){
    return {
        type: DELETE_TEAM_MEMBERS,
        data,
    };
}
export function editTeam(_id, data){
    return{
        type: EDIT_TEAM,
        _id,
        data,
    };
}