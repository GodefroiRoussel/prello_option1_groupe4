import asteroid from '../../common/asteroid';
import { addList, getAllList, removeList } from './ListActions';
import { callUpdateBoardListId} from '../Board/BoardAsyncActions';

export function callAddList(data, board) {
  return dispatch => asteroid.call('addList', data)
      .then(result => {
          dispatch(addList({ ...{_id: result}, ...data }))
          dispatch(callUpdateBoardListId(result, board))
        });
}
export function callGetAllList() {
    return dispatch => asteroid.call('getList')
        .then(result => dispatch(getAllList(result)));
  }

export function callRemoveList(_id) {
    return dispatch => asteroid.call('removeList', _id)
        .then(() => dispatch(removeList(_id)));
}