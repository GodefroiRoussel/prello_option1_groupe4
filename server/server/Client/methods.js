import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random'
import Client from './model';

Meteor.methods({
    addClient(client) {
        // Generate a random ID and a Ramdom secret client for the developer of a length of 43 characters
        const idClient = Random.id(43);
        const secretClient = Random.secret(43);

        const new_client = {
            id: idClient,
            secretClient: secretClient,
            redirectUris: [client.redirectUris],
            grants: client.grants,
            nameClient: client.nameClient,
            logoClient: client.logoClient,
            descriptionClient: client.descriptionClient,
            websiteClient: client.websiteClient
        }
        return Client.insert(new_client);
    },
    getClients() {
        return Client.find().fetch();
    },
    getClientById() {
        return Client.findOne(id);
    },
    removeClient(id) {
        return Client.remove(id);
    }
});