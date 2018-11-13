/*
 * action types
 */

export const ADD_CLIENT = 'ADD_CLIENT';
export const GET_ALL_CLIENT = 'GET_ALL_CLIENT';
export const REMOVE_CLIENT = 'REMOVE_CLIENT';
export const FAIL_REMOVE_CLIENT = 'FAIL_REMOVE_CLIENT';


export function addClient(data) {
    return {
        type: ADD_CLIENT,
        data,
    };
}

export function getAllClient(data) {
    return {
        type: GET_ALL_CLIENT,
        data,
    };
}

export function removeClient(_id) {
    return {
        type: REMOVE_CLIENT,
        _id,
    };
}

export function failRemoveClient(_id) {
    return {
        type: FAIL_REMOVE_CLIENT,
        _id,
    };
}