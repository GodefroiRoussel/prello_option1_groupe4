import {Meteor} from "meteor/meteor";
import SimpleSchema from "simpl-schema";


const CheckList = new Meteor.Collection('checklist');

const ChekListSchema = new SimpleSchema({
    titleCheckList: {
        type: String,
    },
    items: {
        type: Array,
        defaultValue: []
    },
    'items.$': {
        type: String
    }
})

CheckList.attachSchema(ChekListSchema);

export default CheckList
