import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random'
import Client from './model';
import AccessToken from '../AccessToken/model'
import AuthorizationToken from '../AuthorizationToken/model'
import jwt from 'jsonwebtoken'

/*
const options = {

}
SimpleRest.setMethodOptions("getClients", options)*/

Meteor.method("getClients", function (userId) {
    if (!userId)
        userId = Meteor.userId();

    return Client.find({ createdBy: userId }).fetch();
}, {
        url: "clients",
        getArgsFromRequest: function (request) {
            // Let's say we want this function to accept a form-encoded request with
            // fields named `a` and `b`.
            const token = request.authToken;

            //TODO: Handle the verification of JWT
            const decoded = jwt.verify(token, Meteor.settings.SECRET_KEY)

            // Since form enconding doesn't distinguish numbers and strings, we need
            // to parse it manually
            return [decoded.userId]
        },
        httpMethod: "GET"
    }
);
/*
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

    getClientById(id) {
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
    }
});
*/