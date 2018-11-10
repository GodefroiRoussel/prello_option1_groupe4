/*
 * action types
 */

export const ADD_CLIENT = 'ADD_CLIENT';
export const GET_ALL_CLIENT = 'GET_ALL_CLIENT';


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
