import { ADD_TEAM, GET_ALL_TEAM, SET_ACTIVE_ITEM } from './TeamActions';
import { add } from '../../common/helpers';

const teams = (state = [], action) => {
  switch (action.type) {
    case ADD_TEAM:
      return add(state, action);
    case GET_ALL_TEAM:
      return action.data;
    case SET_ACTIVE_ITEM:
      return add(state, action.data);
    default:
      return state;
  }
};

export default teams;