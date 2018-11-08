import { ADD_LIST, GET_BOARD } from './BoardActions';
import bo from '../../common/dataTest'
import boardsTest from '../../common/dataTest'
//import { remove, edit, add } from '../../common/helpers';

const boards = (state = boardsTest, action) => {
    switch (action.type) {
        /*case GET_BOARD:
            console.log("boardred")
            return action.data;*/
        case ADD_LIST:
            return action.data;
        default:
            return state;
    }
};

export default boards;
