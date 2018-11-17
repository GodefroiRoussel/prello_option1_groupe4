import asteroid from '../../common/asteroid';
import { addTeam, getAllTeam, editTeamMembers, removeTeam, updateVisibilityTeam , deleteMemberTeam} from './TeamActions';

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
  console.log(data)
  return dispatch => asteroid.call('addMemberTeam', data)
    .then((result) => {
      if(result){
        return dispatch(editTeamMembers(data))
      }
      else{
        return dispatch(editTeamMembers())
      }
    });
}

export function callRemoveTeam(data){
  return dispatch => asteroid.call('removeTeam', data.id)
    .then(() => dispatch(removeTeam(data.id)));
}

export function callUpdateVisibilityTeam(data){
  return dispatch => asteroid.call('updateVisibilityTeam', data)
    .then(() => {
      dispatch(updateVisibilityTeam(data))
    });
}

export function callDeleteMembers(data){
  return dispatch => asteroid.call('deleteMemberTeam', data)
    .then(() => {
      dispatch(deleteMemberTeam(data))
    });
}