export const EDIT_WORK_BILLABLE = 'EDIT_WORK_BILLABLE';
export const EDIT_WORK_NOT_BILLABLE = 'EDIT_WORK_NOT_BILLABLE'
export const ADD_WORK = 'ADD_WORK'

export function editWorkBillable(data) {
    return {
        type: EDIT_WORK_BILLABLE,
        data
    }
}

export function editWorkNotBillable(data) {
    return {
        type: EDIT_WORK_NOT_BILLABLE,
        data
    }
}

export function addWork(data) {
    return {
        type: ADD_WORK,
        data
    }
}