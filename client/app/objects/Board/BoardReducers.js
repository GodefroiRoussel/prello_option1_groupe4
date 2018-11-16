import { GET_BOARD, ADD_BOARD, RESET, UPDATE_BOARD_LIST, UPDATE_BOARD_LIST_POSITION,EDIT_TITLE_BOARD, EDIT_BOARD, REMOVE_BOARD, EDIT_CAN_COMMENT, EDIT_INVITATION_BOARD, EDIT_TEAMS_BOARD } from './BoardActions';
import { add , edit, update} from '../../common/helpers';

const boards = (state = [], action) => {
    switch (action.type) {
        case ADD_BOARD:
            return add(state, action);
        case REMOVE_BOARD:
            return remove(state, action)
        case UPDATE_BOARD_LIST:
            var elemToEditArray = state.slice().filter(item => item._id === action.id);
            if((Array.isArray(elemToEditArray) && elemToEditArray.length)){
                const elemToEditIndex = state.indexOf(elemToEditArray[0]);
                const newState = state.slice();
                if(elemToEditArray[0].listsId){
                    newState[elemToEditIndex].listsId.push(action.listId)
                    return newState;
                }
            }
            return state;          
        case UPDATE_BOARD_LIST_POSITION:
            elemToEditArray = state.slice().filter(item => item._id === action.data._id);
            if((Array.isArray(elemToEditArray) && elemToEditArray.length)){
                const elemToEditIndex = state.indexOf(elemToEditArray[0]);
                const newState = state.slice();
                if(elemToEditArray[0].listsId){
                    newState[elemToEditIndex].listsId=(action.data.listsId)
                    return newState;
                }
            }
            return state;
        case EDIT_TITLE_BOARD:
            const elemToEditTitleBoard = state.slice().filter(item => item._id === action.data._id);
            if (Array.isArray(elemToEditTitleBoard) && elemToEditTitleBoard.length) {
                const elemToEditIndex = state.indexOf(elemToEditTitleBoard[0]);
                const newState = state.slice();
                newState[elemToEditIndex].titleBoard = action.data.titleBoard;
                return newState;
            }
            return state;
        case EDIT_BOARD:
            return edit(state, action);
        case EDIT_CAN_COMMENT:
            return update(state, action, "canComment")
        case EDIT_INVITATION_BOARD:
            return update(state, action, "invitationsOpenedBoard")
        case EDIT_TEAMS_BOARD:
            return update(state, action, "teams")
        case RESET:
            return [];
        default:
            return state;
    }
};

export default boards;
