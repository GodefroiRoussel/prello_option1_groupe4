import asteroid from '../../common/asteroid';
import { addTeam, getAllTeam } from './TeamActions';

export function callAddTeam(name) {
  return dispatch => asteroid.call('addTeam', name)
      .then(result => dispatch(addTeam({ _id: result, name })));
}

export function callGetAllTeam() {
  return dispatch => asteroid.call('getTeams')
      .then(result => dispatch(getAllTeam(result)));
}