import asteroid from '../../common/asteroid';
import { addClient, getAllClient } from './ClientActions';

export function callAddClient(data) {
    const client = {
        nameClient: data.nameClient, redirectUris: data.redirectUris, grants: data.grants, logoClient: data.logoClient,
        descriptionClient: data.descriptionClient, websiteClient: data.websiteClient
    };
    return dispatch => asteroid.call('addClient', client)
        .then(result => {
            const newClient = {
                _id: result, nameClient: data.nameClient, redirectUris: data.redirectUris, grants: data.grants, logoClient: data.logoClient,
                descriptionClient: data.descriptionClient, websiteClient: data.websiteClient
            };
            dispatch(addClient(newClient))
        });
}

export function callGetAllClient() {
    return dispatch => asteroid.call('getClients')
        .then(result => dispatch(getAllClient(result)));
}