import {ADD_LIST, GET_ALL_LIST, REMOVE_LIST, EDIT_TITLE_LIST, EDIT_LIST, EDIT_CARD_LIST, EDIT_CARD_POS_LIST, EDIT_CARD_POS_BETWEEN_LIST} from './ListActions';
import { remove, edit, add } from '../../common/helpers';
import listsTest from '../../common/dataTest'

const lists = (state = listsTest, action) => {
  switch (action.type) {
    case ADD_LIST:
      return add(state, action);
    /*case REMOVE_LIST:
      return remove(state, action);
    case GET_ALL_LIST:
      return action.data;*/
      case EDIT_TITLE_LIST:
         const elemToEditArray = state.slice().filter(item => item._id === action.data._id);
          if (Array.isArray(elemToEditArray) && elemToEditArray.length) {
              const elemToEditIndex = state.indexOf(elemToEditArray[0]);
              const newState = state.slice();
              newState[elemToEditIndex].titleList = action.data.titleList;
              return newState;
          }
          return state;
      case EDIT_CARD_LIST:
          var elemToEditArray2 = state.slice().filter(item => item._id === action.data.idList);
          if (Array.isArray(elemToEditArray2) && elemToEditArray2.length) {
              const elemToEditIndex = state.indexOf(elemToEditArray2[0]);
              const newState = state.slice();
              if(elemToEditArray2[0].cards){
                newState[elemToEditIndex].cards.push(action.data.idCard)
                return newState;
            }
          }
          return state;
      case EDIT_CARD_POS_LIST:
              elemToEditArray2 = state.slice().filter(item => item._id === action.data._id);
              if (Array.isArray(elemToEditArray2) && elemToEditArray2.length) {
                  const elemToEditIndex = state.indexOf(elemToEditArray2[0]);
                  const newState = state.slice();
                  if(elemToEditArray2[0].cards){
                    newState[elemToEditIndex].cards=action.data.cards
                    return newState;
                }
          }
          return state;
      case EDIT_CARD_POS_BETWEEN_LIST:
      console.log(action.data)
              const elemToEditStart = state.slice().filter(item => item._id === action.data.startList._id);
              const elemToEditFinish = state.slice().filter(item => item._id === action.data.finishList._id);
              if (Array.isArray(elemToEditFinish) && elemToEditFinish.length && Array.isArray(elemToEditStart) && elemToEditStart.length) {
                  const elemToEditStartIndex = state.indexOf(elemToEditStart[0]);
                  const elemToEditFinishIndex = state.indexOf(elemToEditFinish[0]);
                  const newState = state.slice();
                  if(elemToEditStart[0].cards && elemToEditFinish[0].cards){
                    newState[elemToEditStartIndex].cards=action.data.startList.cards
                    newState[elemToEditFinishIndex].cards=action.data.finishList.cards
                    return newState;
                }
          }
          return state;
    case EDIT_LIST:
          return edit(state, action)
    default:
      return state;
  }
};

export default lists;