import { Meteor } from 'meteor/meteor';
import SimpleSchema from "simpl-schema";

const Client = new Meteor.Collection('clients');

const clientSchema = new SimpleSchema({
    id: { type: String },
    clientSecret: { type: String },
    redirectUris: { type: Array },
    'redirectUris.$': { type: String },
    grants: { type: Array },
    'grants.$': { type: String },
    scopes: { type: Array },
    'scopes.$': { type: String },
    nameClient: { type: String },
    logoClient: { type: String, optional: true },
    descriptionClient: { type: String, optional: true },
    websiteClient: { type: String },
    createdBy: { type: String }
});

Client.attachSchema(clientSchema);

export default Client;