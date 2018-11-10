import {Meteor} from "meteor/meteor";
import SimpleSchema from "simpl-schema";
import Board from '../Board/model';

const List = new Meteor.Collection('list');

const listSchema = new SimpleSchema({
    titleList : {type: String},
    positionList :{type: Number},
    isDeletedList: {type: Boolean, defaultValue: false},
    cards: {type: Array, defaultValue: []},
    "cards.$": {type: String}
});

List.attachSchema(listSchema);

export default List;