import {GET_CARD, ADD_CARD, EDIT_CARD_TITLE, EDIT_CARD_DESCRIPTION, EDIT_CARD_BILLABLE} from './CardActions';
import { add } from '../../common/helpers';
import {EDIT_TITLE_LIST} from "../List/ListActions";
//import { remove, edit, add } from '../../common/helpers';

const cards = (state = [], action) => {
    switch (action.type) {
        case GET_CARD:
            return action.data;
        case ADD_CARD:
            return add(state, action);
        case EDIT_CARD_TITLE:
            const elemEditTitle = state.slice().filter(item => item._id === action.data._id);
            if (Array.isArray(elemEditTitle) && elemEditTitle.length) {
                const elemToEditIndex = state.indexOf(elemEditTitle[0]);
                const newState = state.slice();
                newState[elemToEditIndex].titleCard = action.data.titleCard;
                return newState;
            }
            return state;
        case EDIT_CARD_DESCRIPTION:
            const elemEditDesc = state.slice().filter(item => item._id === action.data._id);
            if (Array.isArray(elemEditDesc) && elemEditDesc.length) {
                const elemToEditIndex = state.indexOf(elemEditDesc[0]);
                const newState = state.slice();
                newState[elemToEditIndex].descriptionCard = action.data.descriptionCard;
                return newState;
            }
            return state;
        case EDIT_CARD_BILLABLE:
            const elemEditBill = state.slice().filter(item => item._id === action.data._id);
            if (Array.isArray(elemEditBill) && elemEditBill.length) {
                const elemToEditIndex = state.indexOf(elemEditBill[0]);
                const newState = state.slice();
                newState[elemToEditIndex].billable = action.data.billable;
                return newState;
            }
            return state;
        default:
            return state;
    }
};

export default cards;
