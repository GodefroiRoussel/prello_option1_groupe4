import { ADD_CARD, GET_ALL_LIST, REMOVE_LIST } from './ListActions';
import { remove, edit, add } from '../../common/helpers';
import listsTest from '../../common/dataTest'

const lists = (state = listsTest, action) => {
  switch (action.type) {
    case ADD_CARD:
      return add(state, action);
    /*case REMOVE_LIST:
      return remove(state, action);
    case GET_ALL_LIST:
      return action.data;*/
    default:
      return state;
  }
};

export default lists;