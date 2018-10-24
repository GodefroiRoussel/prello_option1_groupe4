import asteroid from '../../common/asteroid';
import { addList } from './ListActions';

export function callAddList(message) {
  return dispatch => asteroid.call('addList', message)
      .then(result => dispatch(addList({ _id: result, message })));
}
export function callGetAllList() {
    return dispatch => asteroid.call('getLists')
        .then(result => dispatch(getAllList(result)));
  }