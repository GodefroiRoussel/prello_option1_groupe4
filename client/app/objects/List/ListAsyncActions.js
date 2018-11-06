import asteroid from '../../common/asteroid';
import { addList, getAllList, removeList } from './ListActions';

export function callAddList(message) {
  return dispatch => asteroid.call('addList', message)
      .then(result => dispatch(addList({ _id: result, message })));
}
export function callGetAllList() {
    return dispatch => asteroid.call('getList')
        .then(result => dispatch(getAllList(result)));
  }

export function callRemoveList(_id) {
    return dispatch => asteroid.call('removeList', _id)
        .then(() => dispatch(removeList(_id)));
}