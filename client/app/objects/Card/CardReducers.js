import { GET_CARD, ADD_CARD } from './CardActions';
import { add } from '../../common/helpers';
//import { remove, edit, add } from '../../common/helpers';

const cards = (state = [], action) => {
    switch (action.type) {
        case GET_CARD:
            return action.data;
        case ADD_CARD:
            return add(state, action);
        default:
            return state;
    }
};

export default cards;
