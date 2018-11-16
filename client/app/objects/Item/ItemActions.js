export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const CHECK_ITEM = 'CHECK_ITEM';


export function checkItem(data) {
    return {
        type: CHECK_ITEM,
        data
    }
}

export function addItem(data) {
    return {
        type: ADD_ITEM,
        data
    }
}

export function deleteItem(data) {
    return {
        type: DELETE_ITEM,
        data
    }
}
