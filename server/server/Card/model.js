import {Meteor} from "meteor/meteor";
import SimpleSchema from "simpl-schema";


const Card = new Meteor.Collection('card');

const CardSchema = new SimpleSchema({
    titleCard: {
        type: String,
        min: 1,
        max: 20
    },
    descriptionCard: {
        type: String,
        defaultValue: "''"
    },
    deadlineCard: {
        type: Date,
        optional: true,
    },
    positionCard: {
        type: SimpleSchema.Integer,
        defaultValue: 0
    },
    seedCard: {
        type: String,
        defaultValue: "''"
    },
    isDeletedCard: {
        type: Boolean,
        defaultValue: false
    },
    isArchivedCard: {
        type: Boolean,
        defaultValue: false
    },
    billable: {
        type: Boolean,
        defaultValue: false
    },
    assignedUsers: {
        type: Array,
        defaultValue: []
    },
    'assignedUsers.$':{type:String},
    labels: {
        type: Array,
        defaultValue: []
    },
    'labels.$': {type:String},
    comments: {
        type: Array,
        defaultValue: []
    },
    'comments.$': {type: String},
    checkList: {
        type: Array,
        defaultValue: []
    },
    'checkList.$': {type:String},
});

Card.attachSchema(CardSchema);

export default Card