import { ADD_TEAM, GET_ALL_TEAM, EDIT_TEAM_MEMBERS, REMOVE_TEAM, ACTIVE_INDEX } from './TeamActions';
import { add, edit, remove } from '../../common/helpers';

const teams = (state = [], action) => {
  switch (action.type) {
    case ADD_TEAM:
      return add(state, action);

    case GET_ALL_TEAM:
      return action.data;

    case EDIT_TEAM_MEMBERS:
      const elemToEditArray = state.slice().filter(item => item._id === action._id);
        if (Array.isArray(elemToEditArray) && elemToEditArray.length) {
          const elemToEditIndex = state.indexOf(elemToEditArray[0]);
          const newState = state.slice();
          newState[elemToEditIndex].members = action.members;
          return newState;
          }
      return state;

    case REMOVE_TEAM:
      return remove(state, action);

    case ACTIVE_INDEX:
      if(state.activeIndex){
        return {...state, activeIndex: action.data}
      }
      else{
        return state.concat([action.data]);
      }      

    default:
      return state;
  }
};

export default teams;