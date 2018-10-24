import { ADD_TEAM, GET_ALL_TEAM } from './TeamActions';
import { add } from '../../common/helpers';

const teams = (state = [], action) => {
  switch (action.type) {
    case ADD_TEAM:
      return add(state, action);
    case GET_ALL_TEAM:
      return action.data;
    default:
      return state;
  }
};

export default teams;