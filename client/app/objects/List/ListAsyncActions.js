import asteroid from '../../common/asteroid';
import { addCard } from './ListActions';

export function callAddCard(message) {
  console.log('calladdcard')
  return dispatch => asteroid.call('addCard', message)
      .then(result => dispatch(addCard({ _id: result, message })));
}
/*export function callGetAllList() {
    return dispatch => asteroid.call('getList')
        .then(result => dispatch(getAllList(result)));
  }

export function callRemoveList(_id) {
    return dispatch => asteroid.call('removeList', _id)
        .then(() => dispatch(removeList(_id)));
}*/