import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random'
import Client from './model';

Meteor.methods({
    addClient(client) {
        // Generate a random ID and a Ramdom secret client for the developer of a length of 43 characters
        const idClient = Random.id(43);
        const clientSecret = Random.secret(43);
        const userId = Meteor.userId();

        const new_client = {
            id: idClient,
            clientSecret: clientSecret,
            redirectUris: [client.redirectUris],
            grants: client.grants,
            nameClient: client.nameClient,
            logoClient: 'Plus obligatoire',
            descriptionClient: client.descriptionClient,
            websiteClient: client.websiteClient,
            createdBy: userId

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
        const userId = Meteor.userId();
        Client.findOne({ _id: id, createdBy: userId }).then(client => {
            if (client)
                return Client.remove(id);
            else
                throw new Meteor.Error('Not Authorized');
        }).catch(err => {
            console.log(err)
            throw new Meteor.Error('Not Authorized');
        });

    }
});