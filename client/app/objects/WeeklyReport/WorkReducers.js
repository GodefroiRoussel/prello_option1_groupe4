import { remove, edit, add } from '../../common/helpers';
import {ADD_WORK} from "./WorkActions";

const works = (state = [], action) => {
    switch (action.type) {
        case ADD_WORK:
            return add(state, action);
        default:
            return state;
    }
}

export default works;