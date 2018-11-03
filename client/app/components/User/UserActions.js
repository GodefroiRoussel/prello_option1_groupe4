/*
 * action types
 */

//Constant pour simplifier l'appel
export const ADD_USER = 'ADD_TODO';
export const REMOVE_USER = 'REMOVE_USER';
export const EDIT_USER = 'EDIT_USER';
export const GET_ALL_USER = 'GET_ALL_USER';

/*
 * action creators
 */

//On déclare les fonctions utilisé
export function addUser(data) {
    return {
        type: ADD_USER,
        data,
    };
}

export function removeUser(_id) {
    return {
        type: REMOVE_USER,
        _id,
    };
}

export function editUser(_id, finished) {
    return {
        type: EDIT_USER,
        _id,
        finished,
    };
}

export function getAllUser(data) {
    return {
        type: GET_ALL_USER,
        data,
    };
}
