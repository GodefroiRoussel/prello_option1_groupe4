import asteroid from '../../common/asteroid';
import { addClient, getAllClient, removeClient, failRemoveClient } from './ClientActions';

export function callAddClient(data) {
    const client = {
        nameClient: data.nameClient, redirectUris: data.redirectUris, grants: data.grants, logoClient: data.logoClient,
        descriptionClient: data.descriptionClient, websiteClient: data.websiteClient
    };
    return dispatch => asteroid.call('addClient', client)
        .then(result => {
            asteroid.call('getClientById', result).then(clientRegistered => {
                dispatch(addClient(clientRegistered))
            })
        });
}

export function callGetAllClient() {
    return dispatch => asteroid.call('getClients')
        .then(result => dispatch(getAllClient(result)));
}

export function callRemoveClient(data) {
    return dispatch => asteroid.call('removeClient', data.id)
        .then(() => dispatch(removeClient(data.id)))
        .catch(err => {
            console.log(err)
            dispatch(failRemoveClient(data.id))
        });
}