import { GET_BOARD, ADD_BOARD, RESET, UPDATE_BOARD_LIST } from './BoardActions';
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
                console.log(newState[elemToEditIndex]);
                if(elemToEditArray[0].listsId){
                    newState[elemToEditIndex].listsId.push(action.listId)
                    console.log(newState);
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
        return state;
        case RESET:
            return [];
        default:
            return state;
    }
};

export default boards;
