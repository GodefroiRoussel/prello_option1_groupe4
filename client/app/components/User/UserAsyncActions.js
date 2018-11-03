import asteroid from '../../common/asteroid';
import { addUser, getAllUser, removeUser, editUser } from './UserActions';

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

export function callEditUser(_id, finished) {
    return dispatch => asteroid.call('editUser', _id, finished)
        .then(() => dispatch(editUser(_id, finished)));
}