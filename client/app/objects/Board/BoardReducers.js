import { GET_BOARD } from './BoardActions';
import bo from '../../common/dataTest'
//import { remove, edit, add } from '../../common/helpers';

const boards = (state = bo, action) => {
    switch (action.type) {
        case GET_BOARD:
            console.log("boardred")
            return action.data;
        default:
            return state;
    }
};

export default boards;
