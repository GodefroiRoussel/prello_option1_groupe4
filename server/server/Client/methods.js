import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random'
import Client from './model';
import AccessToken from '../AccessToken/model'
import AuthorizationToken from '../AuthorizationToken/model'
import jwt from "jsonwebtoken";

const SECRET_KEY = Meteor.settings.SECRET_KEY || process.env.SECRET_KEY;
const ISSUER = Meteor.settings.ISSUER || process.env.ISSUER;

/**
 * Method that returns a list of clients for a user
 * params: userId: String: Id of the user
 * API: require an Authorization Bearer token
 * return: list of clients corresponding at the userId
 */
Meteor.method("getClients", function (userId) {
    if (!userId)
        userId = Meteor.userId();

    return Client.find({ createdBy: userId }).fetch();
}, {
        url: "clients",
        getArgsFromRequest: function (request) {
            const token = request.authToken;
            try {
                const decoded = jwt.verify(token, SECRET_KEY, {
                    ignoreExpiration: false,
                    issuer: ISSUER
                });
                return [decoded.userId];
            } catch (err) {
                throw new Meteor.Error('Token Invalid', "This token is not valid");
            }
        },
        httpMethod: "GET"
    }
);

/**
 * Method that add a client to a user
 * params: client: Client: The client to add ! Require
 * This method isn't accessible from the API
 * return: the id of the new client
 */
Meteor.method("addClient", function (client) {
    const userId = Meteor.userId();
    // Generate a random ID and a Ramdom secret client for the developer of a length of 43 characters
    const idClient = Random.id(43);
    const clientSecret = Random.secret(43);

    const new_client = {
        id: idClient,
        clientSecret: clientSecret,
        redirectUris: [client.redirectUris],
        grants: client.grants,
        scopes: client.scopes,
        nameClient: client.nameClient,
        logoClient: 'Plus obligatoire',
        descriptionClient: client.descriptionClient,
        websiteClient: client.websiteClient,
        createdBy: userId
    }
    return Client.insert(new_client);
});

/**
 * Method that get information of client according to an id
 * params:  clientId: String: the client id of the client we want
 *          userId: String: the user id, if not defined we retrieve the user connected
 * API: require an Authorization Bearer token
 * return: the client
 */
Meteor.method("getClientById", function (clientId, userId) {
    if (!userId)
        userId = Meteor.userId();

    return Client.findOne({ _id: clientId, createdBy: userId });
}, {
        url: "clients/:id",
        getArgsFromRequest: function (request) {
            const token = request.authToken;
            const params = request.params;
            if (params.id) {
                try {
                    const decoded = jwt.verify(token, SECRET_KEY, {
                        ignoreExpiration: false,
                        issuer: ISSUER
                    });
                    return [params.id, decoded.userId];
                } catch (err) {
                    console.log(err);
                    throw new Meteor.Error('Token Invalid', "This token is not valid");
                }
            } else {
                throw new Meteor.Error('Missing clientId', "Missing parameter client in the param body");
            }
        },
        httpMethod: "GET"
    }
);

/**
 * Method that delete a client 
 * params:  clientId: String: The id of the client
 *          userId: String: The id of the user 
 * API: require an Authorization Bearer token
 * return a 200 status code if well deleted else 500 Not Authorized
 */
Meteor.method('removeClient', function (clientId, userId) {
    if (!userId)
        userId = Meteor.userId();

    if (!clientId)
        throw new Meteor.Error('Missing clientId', "Missing parameter client in the param body");

    var client = Client.findOne({ _id: clientId, createdBy: userId })
    if (client) {
        AccessToken.remove({ "client.id": client.id })
        AuthorizationToken.remove({ "client.id": client.id })
        return Client.remove(clientId)
    } else
        throw new Meteor.Error('Not Authorized', "You are not authorized to do this action");
}, {
        url: "clients/:id",
        getArgsFromRequest: function (request) {
            const token = request.authToken;
            const params = request.params;
            if (params._id) {
                try {
                    const decoded = jwt.verify(token, SECRET_KEY, {
                        ignoreExpiration: false,
                        issuer: ISSUER
                    });
                    return [params._id, decoded.userId];
                } catch (err) {
                    console.log(err);

                    throw new Meteor.Error('Token Invalid', "This token is not valid");
                }
            } else {
                throw new Meteor.Error('Missing clientId', "Missing parameter clientId in the request");
            }
        },
        httpMethod: "DELETE"
    }
);