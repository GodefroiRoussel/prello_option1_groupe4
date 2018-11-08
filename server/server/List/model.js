import {Meteor} from "meteor/meteor";
import SimpleSchema from "simpl-schema";
import Board from '../Board/model';

const List = new Meteor.Collection('list');

const listSchema = new SimpleSchema({
    titleList : {type: String},
    positionList :{type: Number},
    isDeletedList: {type: Boolean, defaultValue: false},
});

List.attachSchema(listSchema);

export default List;