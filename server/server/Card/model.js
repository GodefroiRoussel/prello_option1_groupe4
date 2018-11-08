import {Meteor} from "meteor/meteor";
import SimpleSchema from "simpl-schema";


const Card = new Meteor.Collection('Card');

const CardSchema = new SimpleSchema({
    titleCard: {
        type: String,
        min: 1,
        max: 20
    },
    descriptionCard: {
        type: String,
        optional: true
    },
    deadlineCard: {
        type: Date,
        optional: true,
    },
    positionCard: {
        type: SimpleSchema.Integer,
        optional: true
    },
    seedCard: {
        type: String,
        optional: true
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
    assignedUser: {
        type: String,
        optional: true
    }

});

Card.attachSchema(CardSchema);

export default Card