import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random'
import Client from './model';
import AccessToken from '../AccessToken/model'
import AuthorizationToken from '../AuthorizationToken/model'

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
    removeClient(_id) {
        const userId = Meteor.userId();
        var client = Client.findOne({ _id: _id, createdBy: userId })

        if (client) {
            AccessToken.remove({ "client.id": client.id })
            AuthorizationToken.remove({ "client.id": client.id })
            return Client.remove(_id)
        } else {
            console.log("error")
            throw new Meteor.Error('Not Authorized', "You are not authorized to do this action");
        }

        /*
        .then(client => {
            console.log("MONTRE MOI MON CLIENT")
            console.log(CLIENT)
            if (client)
                return Client.remove(id);
            else
                throw new Meteor.Error('Not Authorized');
        }).catch(err => {
            console.log(err)
            throw new Meteor.Error('Not Authorized');
        });*/

    }
});