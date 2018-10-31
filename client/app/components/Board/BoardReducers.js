import { GET_BOARD } from './BoardActions';
//import { remove, edit, add } from '../../common/helpers';

const boards = (state = [], action) => {
    switch (action.type) {
        case GET_BOARD:
            console.log("boardred")
            return action.data;
        default:
            return state;
    }
};

export default boards;
