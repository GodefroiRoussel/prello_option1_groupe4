import {Meteor} from 'meteor/meteor';

const Team = new Meteor.Collection('team');

Team.schema = new SimpleSchema({
    nameTeam: {type: String},
    visibilityTeam: {type: Boolean},
    seedTeam: {type: String, optional: true},
    invitationsOpenedTeam: {type: Boolean, optional: true},
    isArchived: {type: Boolean},
    idBoards: {type: Array, optional: true},
    'idBoards.$': {type: String},
    ownerTeam: {type: String},
    members: {type: Array},
    'members.$': {type: String},
});

export default Team;