import { ADD_TEAM, GET_ALL_TEAM, EDIT_TEAM_MEMBERS, REMOVE_TEAM, ACTIVE_INDEX, RESET, EDIT_TEAM_VISIBILITY, DELETE_TEAM_MEMBERS, EDIT_TEAM } from './TeamActions';
import { add, edit, remove } from '../../common/helpers';

const teams = (state = [], action) => {
  switch (action.type) {
    case ADD_TEAM:
      return add(state, action);

    case GET_ALL_TEAM:
      return action.data;

    case EDIT_TEAM_MEMBERS:
      if(action.data){
        var elemToEditArray = state.slice().filter(item => item._id === action.data._id);
        if (Array.isArray(elemToEditArray) && elemToEditArray.length) {
          const elemToEditIndex = state.indexOf(elemToEditArray[0]);
          const newState = state.slice();
          newState[elemToEditIndex].members.push(action.data.member);
          return newState;
          }
        return state;
      }else{
        return state;
      }

    case REMOVE_TEAM:
      return remove(state, action);  

    case ACTIVE_INDEX:
      if(state.activeIndex){
        return {...state, activeIndex: action.data}
      }
      else{
        return state.concat([action.data]);
      }
    
    case EDIT_TEAM_VISIBILITY:
      elemToEditArray = state.slice().filter(item => item._id === action.data._id);
      if (Array.isArray(elemToEditArray) && elemToEditArray.length) {
        const elemToEditIndex = state.indexOf(elemToEditArray[0]);
        const newState = state.slice();
        newState[elemToEditIndex].visibilityTeam = action.data.visibilityTeam;
        return newState;
        }
      return state;

    case DELETE_TEAM_MEMBERS:
        elemToEditArray = state.slice().filter(item => item._id === action.data._id);
        if (Array.isArray(elemToEditArray) && elemToEditArray.length) {
          const elemToEditIndex = state.indexOf(elemToEditArray[0]);
          const newState = state.slice();
          const members = newState[elemToEditIndex].members;
          const finalMembers = members.filter(x => x!=action.data.member);
          newState[elemToEditIndex].members = finalMembers;
          return newState;
          }
        return state;

    case EDIT_TEAM:
          return edit(state, action);
    case RESET:
      return [];

    default:
      return state;
  }
};

export default teams;