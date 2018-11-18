import {add, remove} from "../../common/helpers";
import {ADD_CHECKLIST, DELETE_CHECKLIST, EDIT_ITEMS_CHECKLIST} from "./CheckListAction";


const checklists = (state= [], action) => {
    switch (action.type) {
        case ADD_CHECKLIST:
            return add(state, action);
        case DELETE_CHECKLIST:
            return remove(state, action);
        case EDIT_ITEMS_CHECKLIST:
            const elemToEditArray = state.slice().filter(item => item._id === action.data._id);
            if (Array.isArray(elemToEditArray) && elemToEditArray.length) {
                const elemToEditIndex = state.indexOf(elemToEditArray[0]);
                const newState = state.slice();
                newState[elemToEditIndex].items = action.data.items;
                return newState;
            }
            return state;
        default:
            return state;
    }
}

export default checklists;