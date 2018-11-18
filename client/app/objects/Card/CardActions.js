export const GET_CARD = 'GET_CARD';
export const ADD_CARD = 'ADD_CARD';
export const EDIT_CARD_TITLE = 'EDIT_CARD_TITLE';
export const EDIT_CARD_DESCRIPTION = 'EDIT_CARD_DESCRIPTION';
export const EDIT_CARD_BILLABLE = 'EDIT_CARD_BILLABLE';
export const EDIT_CONTRIBUTOR_CARD = 'EDIT_CONTRIBUTOR_CARD';
export const EDIT_LABEL_CARD = 'EDIT_LABEL_CARD';
export const EDIT_COMMENT_CARD = 'EDIT_COMMENT_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const EDIT_CARD='EDIT_CARD';

export function getCard(_id) {
    return {
        type: GET_CARD,
        _id,
    };
}

export function addCard(data){
    return{
        type: ADD_CARD,
        data,
    }
}

export function updateCardTitle(data) {
    return {
        type: EDIT_CARD_TITLE,
        data,
    }
}

export function updateCardDescription(data) {
    return {
        type: EDIT_CARD_DESCRIPTION,
        data,
    }
}

export function updateCardBillable(data) {
    return {
        type: EDIT_CARD_BILLABLE,
        data,
    }
}

export function editContributorCard(data) {
    return {
        type: EDIT_CONTRIBUTOR_CARD,
        data
    }
}

export function editLabelCard(data) {
    return {
        type: EDIT_LABEL_CARD,
        data
    }
}

export function deleteCard(data) {
    return {
        type: DELETE_CARD,
        data
}
}

/*export function archiveCard(data) {
    return {id: 'a'}
}*/
export function editCommentCard (data){
    return {
        type: EDIT_COMMENT_CARD,
        data
    }
}

export function editCard(_id, data){
    return{
        type: EDIT_CARD,
        _id,
        data,
    };
}