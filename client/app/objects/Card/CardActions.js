export const GET_CARD = 'GET_CARD';
export const ADD_CARD = 'ADD_CARD';
export const EDIT_CARD_TITLE = 'EDIT_CARD_TITLE';
export const EDIT_CARD_DESCRIPTION = 'EDIT_CARD_DESCRIPTION';
export const EDIT_CARD_BILLABLE = 'EDIT_CARD_BILLABLE';
export const EDIT_CONTRIBUTOR_CARD = 'EDIT_CONTRIBUTOR_CARD';

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

export function addContributorCard(data) {
    return {
        type: EDIT_CONTRIBUTOR_CARD,
        data
    }
}

export function deleteContributorCard(data) {
    return {
        type: EDIT_CONTRIBUTOR_CARD,
        data
    }
}