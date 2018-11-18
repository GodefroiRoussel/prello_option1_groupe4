import {Meteor} from "meteor/meteor";
import SimpleSchema from "simpl-schema";


const Work = new Meteor.Collection('work');

const WorkSchema = new SimpleSchema({
    idUser: {
        type: String,
    },
    idCard: {
        type: String,
    },
    day: {
        type: Date,
        //defaultValue: new Date
    },
    timePredicted: {
        type: Number,
        defaultValue: 0,
    },
    timeReal: {
        type: Number,
        min: 0
    },
});

Work.attachSchema(WorkSchema);

export default Work