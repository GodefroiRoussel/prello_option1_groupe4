import {add, remove} from "../../common/helpers";
import {ADD_ITEM, CHECK_ITEM, DELETE_ITEM} from "./ItemActions";


const items = (state, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return add(state, action);
        case DELETE_ITEM:
            return remove(state, action);
        case CHECK_ITEM:
            const elemToEditArray = state.slice().filter(item => item._id === action.data._id);
            if (Array.isArray(elemToEditArray) && elemToEditArray.length) {
                const elemToEditIndex = state.indexOf(elemToEditArray[0]);
                const newState = state.slice();
                newState[elemToEditIndex].checkedItem = action.data.checkedItem;
                return newState;
            }
            return state;
        default:
            return null; //TODO: change with state
    }
}

export default items;