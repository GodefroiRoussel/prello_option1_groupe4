import {Meteor} from "meteor/meteor";
import SimpleSchema from "simpl-schema";


const OtherWork = new Meteor.Collection('otherwork');

const OtherWorkSchema = new SimpleSchema({
    otherWorkTitle: {
        type: String
    },
    dateOtherWork: {
        type: Date,
    },
    nbHoursSpent: {
        type: Number,
        min: 0
    },
    idUser: {
        type: String
    },
    billable: {
        type: Boolean,
        defaultValue: false
    }
});

OtherWork.attachSchema(OtherWorkSchema);

export default OtherWork