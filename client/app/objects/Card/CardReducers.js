import {
    GET_CARD,
    ADD_CARD,
    EDIT_CARD_TITLE,
    EDIT_CARD_DESCRIPTION,
    EDIT_CARD_BILLABLE,
    EDIT_CONTRIBUTOR_CARD,
    EDIT_LABEL_CARD, EDIT_COMMENT_CARD,
    DELETE_CARD
} from './CardActions';
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
        case EDIT_CONTRIBUTOR_CARD:
            const elemEditMemb = state.slice().filter(item => item._id === action.data._id);
            if (Array.isArray(elemEditMemb) && elemEditMemb.length) {
                const elemToEditIndex = state.indexOf(elemEditMemb[0]);
                const newState = state.slice();
                newState[elemToEditIndex].members = action.data.members;
                return newState;
            }
            return state;
        case EDIT_LABEL_CARD:
            const elemEditLabel = state.slice().filter(item => item._id === action.data._id);
            if (Array.isArray(elemEditLabel) && elemEditLabel.length) {
                const elemToEditIndex = state.indexOf(elemEditLabel[0]);
                const newState = state.slice();
                newState[elemToEditIndex].labels = action.data.labels;
                return newState;
            }
            return state;
        case EDIT_COMMENT_CARD:
            const elemEditComment = state.slice().filter(item => item._id === action.data._id);
            if (Array.isArray(elemEditComment) && elemEditComment.length) {
                const elemToEditIndex = state.indexOf(elemEditComment[0]);
                const newState = state.slice();
                newState[elemToEditIndex].comments = action.data.comments;
                return newState;
            }
            return state;
        case DELETE_CARD:
            const elemEditDelete = state.slice().filter(item => item._id === action.data._id);
            if (Array.isArray(elemEditDelete) && elemEditDelete.length) {
                const elemToEditIndex = state.indexOf(elemEditDelete[0]);
                const newState = state.slice();
                newState[elemToEditIndex].isDeletedCard = action.data.isDeletedCard;
                return newState;
            }
            return state;
        default:
            return state;
    }
};

export default cards;
