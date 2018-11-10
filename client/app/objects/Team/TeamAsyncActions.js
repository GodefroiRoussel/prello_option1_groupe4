import asteroid from '../../common/asteroid';
import { addTeam, getAllTeam, editTeamMembers, removeTeam } from './TeamActions';

export function callAddTeam(data) {
  const team = {nameTeam: data.nameTeam, idBoards: ["one board"], ownerTeam: data.user, members: [data.user]};
  return dispatch => asteroid.call('addTeam', team)
      .then(result => {
        const newTeam = {_id: result, nameTeam: data.nameTeam, idBoards: ["one board"], ownerTeam: data.user, members: [data.user]};
        dispatch(addTeam(newTeam))
      });
}

export function callGetAllTeam() {
  return dispatch => asteroid.call('getTeams')
      .then(result => dispatch(getAllTeam(result)));
}

export function callAddMember(data){
  return dispatch => asteroid.call('addMemberTeam', data.id, data.members)
    .then(() => {
      dispatch(editTeamMembers(data.id, data.members))
    });
}

export function callRemoveTeam(data){
  return dispatch => asteroid.call('removeTeam', data.id)
    .then(() => dispatch(removeTeam(data.id)));
}