import { Meteor } from 'meteor/meteor';

const Client = new Meteor.Collection('clients');

Client.schema = new SimpleSchema({
    id: { type: String },
    clientSecret: { type: String },
    redirectUris: { type: Array },
    grants: { type: Array },
    nameClient: { type: String },
    logoClient: { type: String },
    descriptionClient: { type: String, optional: true },
    websiteClient: { type: String }
});

export default Client;