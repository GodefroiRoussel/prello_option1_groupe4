import { ADD_LIST, GET_ALL_LIST, REMOVE_LIST } from './ListActions';
import { remove, edit, add } from '../../common/helpers';

const lists = (state = [], action) => {
  switch (action.type) {
    case ADD_LIST:
      return add(state, action);
    case REMOVE_LIST:
      return remove(state, action);
    case GET_ALL_LIST:
      return action.data;
    default:
      return state;
  }
};

export default lists;