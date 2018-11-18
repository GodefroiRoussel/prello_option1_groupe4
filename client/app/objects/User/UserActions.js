/*
 * action types
 */

//Constant pour simplifier l'appel
export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const EDIT_USER_PROFILE = 'EDIT_USER_PROFILE';
export const EDIT_USER_PASSWORD = 'EDIT_USER_PASSWORD';
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

export function editUserProfile(data) {
    return {
        type: EDIT_USER_PROFILE,
        data
    };
}

export function editUserPassword(data) {
    return {
        type: EDIT_USER_PASSWORD,
        data
    };
}

export function getAllUser(data) {
    return {
        type: GET_ALL_USER,
        payload: {products},
    };
}
