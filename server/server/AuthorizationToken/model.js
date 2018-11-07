import { Meteor } from 'meteor/meteor';

const AuthorizationToken = new Meteor.Collection('client');

AuthorizationToken.schema = new SimpleSchema({
    authorizationCode: { type: String },
    redirect_uri: { type: String },
    expiresAt: { type: Date },
    client: {
        id: { type: String }
    },
    user: { type: Object },
});

export default AuthorizationToken;