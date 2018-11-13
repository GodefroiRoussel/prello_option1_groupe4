import { Meteor } from 'meteor/meteor';

const AccessToken = new Meteor.Collection('accesstokens');

const tokensSchema = new SimpleSchema({
    accessToken: { type: String }, // JWT with user id and client id and all other information important
    accessTokenExpiresAt: { type: Date },
    "client.id": { type: String },
    refreshToken: { type: String },
    refreshTokenExpiresAt: { type: Date },
    "user.id": { type: String },
})

AccessToken.attachSchema(tokensSchema);

export default AccessToken;