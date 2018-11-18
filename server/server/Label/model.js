import {Meteor} from "meteor/meteor";
import SimpleSchema from "simpl-schema";


const Label = new Meteor.Collection('label');

const LabelSchema = new SimpleSchema({
    titleLabel: {
        type: String
    },
    colorLabel: {
        type: Array
    },
    'colorLabel.$':{
        type: Number
    },
    isDeletedLabel: {
        type: Boolean,
        defaultValue: false,
    }
});

Label.attachSchema(LabelSchema);

export default Label