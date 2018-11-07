import { GET_BOARD, ADD_BOARD } from './BoardActions';
import bo from '../../common/dataTest'
import boardsTest from '../../common/dataTest'
import { add } from '../../common/helpers';
//import { remove, edit, add } from '../../common/helpers';

const boards = (state = [], action) => {
    switch (action.type) {
        /*case GET_BOARD:
            console.log("boardred")
            return action.data;*/
        case ADD_BOARD:
            return add(state, action);
        default:
            return state;
    }
};

export default boards;
