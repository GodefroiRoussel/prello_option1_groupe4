import asteroid from '../../common/asteroid';
import { Link, browserHistory } from 'react-router'

import { addUser, getAllUser, removeUser, editUserProfile, deleteFavoriteBoard, addFavoriteBoard, removeAuthorizationClient } from './UserActions';

export function callAddUser(data) {
    return dispatch => asteroid.call('addUser', data)
        .then(result => dispatch(addUser({ _id: result, data })));
    //.then est un promise pour ne pas bloquer la page / id est le retour du serveur avec un message / dispatch grace à redux ajoute à notre state
}

export function callGetAllUser() {
    return dispatch => asteroid.call('getUsers')
        .then(result => dispatch(getAllUser(result)));
}

export function callRemoveUser(_id) {
    return dispatch => asteroid.call('removeUser', _id)
        .then(() => dispatch(removeUser(_id)));
}

export function callEditUserProfile(data) {
    return dispatch => asteroid.call('editUserProfile', data)
        .then(() => dispatch(editUserProfile(data)));
}
export function callEditUserPassword(data) {
    return dispatch => asteroid.call('editUserPassword', data)
        .then(() => dispatch(editUserPassword(data)));
}

export function callAddFavoriteBoard(data) {
    return dispatch => asteroid.call('addFavoriteBoard', data)
        .then(() => {
            window.location.reload();
            return dispatch(addFavoriteBoard(data))
        });
}

export function callDeleteFavoriteBoard(data) {
    return asteroid.call('deleteFavoriteBoard', data)
        .then(() => {
            window.location.reload();
            return dispatch(deleteFavoriteBoard(data))
        });
}

export function callRemoveAuthorizationClient(_id) {
    return dispatch => asteroid.call('removeAuthorization', _id)
        .then(() => dispatch(removeAuthorizationClient(_id)));
}