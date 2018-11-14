import { GET_BOARD, ADD_BOARD, RESET, UPDATE_BOARD_LIST, UPDATE_BOARD_LIST_POSITION } from './BoardActions';
import { add } from '../../common/helpers';
//import { remove, edit, add } from '../../common/helpers';

const boards = (state = [], action) => {
    switch (action.type) {
        case ADD_BOARD:
            return add(state, action);
        case UPDATE_BOARD_LIST:
            const elemToEditArray = state.slice().filter(item => item._id === action.id);
            if((Array.isArray(elemToEditArray) && elemToEditArray.length)){
                const elemToEditIndex = state.indexOf(elemToEditArray[0]);
                const newState = state.slice();
                if(elemToEditArray[0].listsId){
                    newState[elemToEditIndex].listsId.push(action.listId)
                    return newState;
                }
            }
            return state;
            /*const elemToEditArray = state.slice().filter(item => item._id === action._id);
                if (Array.isArray(elemToEditArray) && elemToEditArray.length) {
                    const elemToEditIndex = state.indexOf(elemToEditArray[0]);
                    const newState = state.slice();
                    newState[elemToEditIndex].finished = action.finished;
                    return newState;
                }
                return state;
            }*/            
        case UPDATE_BOARD_LIST_POSITION:
            const elemToEditArray2 = state.slice().filter(item => item._id == action.data._id);
            if((Array.isArray(elemToEditArray2) && elemToEditArray2.length)){
                const elemToEditIndex = state.indexOf(elemToEditArray2[0]);
                const newState = state.slice();
                if(elemToEditArray2[0].listsId){
                    newState[elemToEditIndex].listsId=(action.data.listsId)
                    return newState;
                }
            }
            return state;
        case RESET:
            return [];
        default:
            return state;
    }
};

export default boards;
