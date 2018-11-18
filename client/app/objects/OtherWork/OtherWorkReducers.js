import {ADD_OTHER_WORK} from "./OtherWorkActions";
import {add} from "../../common/helpers";

const otherworks = (state = [], action) => {
    switch (action.type) {
        case ADD_OTHER_WORK:
            return add(state, action);
        default:
            return state
    }
}

export default otherworks