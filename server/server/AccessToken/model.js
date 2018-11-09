import { Meteor } from 'meteor/meteor';

const TokensSchema = new Meteor.Collection('accessTokens');

TokensSchema = new SimpleSchema({
    accessToken: { type: String }, // JWT with user id and client id and all other information important
    accessTokenExpiresAt: { type: Date },
    client: {
        id: { type: String }
    },
    refreshToken: { type: String },
    refreshTokenExpiresAt: { type: Date },
    user: {
        id: { type: String }
    },
})

export default TokensSchema;