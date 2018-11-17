import {Meteor} from "meteor/meteor";
import SimpleSchema from "simpl-schema";
import Label from '../Label/model';

const Board = new Meteor.Collection('board');

const BoardSchema = new SimpleSchema({
    titleBoard: {type: String,min: 1, max: 20},
    visibilityBoard: {type: Boolean,defaultValue: true},
    backgroundBoard: {type: String,optional: true},
    seedBoard: {type: String,optional: true},
    invitationsOpenedBoard: {type: Boolean,defaultValue: true},
    isDeletedBoard: {type: Boolean,defaultValue: false},
    isArchivedBoard: {type: Boolean,defaultValue: false},
    canComment: {type: String, defaultValue: "all"},
    seedForGuest: {type: Boolean,optional: true},
    labels: {type: Array, defaultValue: []},
    'labels.$': {type: String},
    admins : {type: Array},
    'admins.$':{type: String},
    members : {type: Array},
    'members.$':{type: String},
    teams : {type: Array, optional: true},
    'teams.$':{type:String},
    listsId : {type: Array, defaultValue: []},
    'listsId.$':{type:String},
});


Board.attachSchema(BoardSchema);

export default Board;