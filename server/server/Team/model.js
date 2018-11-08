import {Meteor} from 'meteor/meteor';
import SimpleSchema from "simpl-schema";

const Team = new Meteor.Collection('team');

const teamSchema = new SimpleSchema({
    nameTeam: {type: String},
    visibilityTeam: {type: Boolean, defaultValue: false},
    seedTeam: {type: String, optional: true},
    invitationsOpenedTeam: {type: Boolean, optional: true},
    isArchived: {type: Boolean, defaultValue: false},
    idBoards: {type: Array, optional: true},
    'idBoards.$': {type: String},
    ownerTeam: {type: String},
    members: {type: Array},
    'members.$': {type: String},
});

Team.attachSchema(teamSchema);

export default Team;