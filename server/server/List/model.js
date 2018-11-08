import {Meteor} from "meteor/meteor";
import SimpleSchema from "simpl-schema";

const List = new Meteor.Collection('list');

const ListSchema = new SimpleSchema({
    titleList: {
        type: String,
        min: 1,
        max: 20
    },
    positionList: {
        type: SimpleSchema.Integer,
    },
    isDeletedList: {
        type: Boolean,
        defaultValue: false
    },
    isArchivedList: {
        type: Boolean,
        defaultValue: false
    },
    idCards: {
        type: Array,
    },
    'idCards.$': {type: String}
});

List.attachSchema(ListSchema);

export default List