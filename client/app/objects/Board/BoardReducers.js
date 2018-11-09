import { GET_BOARD, ADD_BOARD, RESET, UPDATE_BOARD_LIST } from './BoardActions';
import { add } from '../../common/helpers';
//import { remove, edit, add } from '../../common/helpers';

const boards = (state = [], action) => {
    switch (action.type) {
        case ADD_BOARD:
            return add(state, action);
        //case UPDATE_BOARD_LIST:
            //return state;
        case RESET:
            return [];
        default:
            return state;
    }
};

export default boards;
