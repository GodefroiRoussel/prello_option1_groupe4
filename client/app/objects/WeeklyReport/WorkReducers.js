import { remove, edit, add } from '../../common/helpers';
import {ADD_WORK, GET_WORKS_CARD} from "./WorkActions";

const works = (state = [], action) => {
    switch (action.type) {
        case ADD_WORK:
            return add(state, action);
        case GET_WORKS_CARD:
            return action.data;
        default:
            return state;
    }
}

export default works;