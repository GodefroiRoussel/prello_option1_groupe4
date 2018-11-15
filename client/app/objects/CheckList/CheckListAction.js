export const ADD_CHECKLIST = 'ADD_CHECKLIST'
export const DELETE_CHECKLIST = 'DELETE_CHECKLIST'
export const EDIT_ITEMS_CHECKLIST = 'EDIT_ITEMS_CHECKLIST'

export function deleteCheckList(id) {
    return {
        type: DELETE_CHECKLIST,
        id
    }
}

export function editListItems(data) {
    return {
        type: EDIT_ITEMS_CHECKLIST,
        data
    }
}

export function addCheckList(data) {
    return {
        type: ADD_CHECKLIST,
        data
    }
}
