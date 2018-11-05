import asteroid from '../../common/asteroid';
import { addTeam, getAllTeam } from './TeamActions';

export function callAddTeam(data) {
  console.log(data.name);
  const team = {nameTeam: data.name, visibilityTeam: true, isArchived: false, idBoards: ["one board"], ownerTeam: data.user, members: [data.user], };
  return dispatch => asteroid.call('addTeam', team)
      .then(result => {
        const newTeam = {_id: result, visibilityTeam: true, isArchived: false, nameTeam: data.name, idBoards: ["one board"], ownerTeam: data.user, members: [data.user]};
        dispatch(addTeam(newTeam))
      });
}

export function callGetAllTeam() {
  return dispatch => asteroid.call('getTeams')
      .then(result => dispatch(getAllTeam(result)));
}