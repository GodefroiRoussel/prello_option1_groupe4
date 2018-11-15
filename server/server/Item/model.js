import {Meteor} from "meteor/meteor";
import SimpleSchema from "simpl-schema";


const Item = new Meteor.Collection('item');

const ItemSchema = new SimpleSchema({
    titleItem: {
        type: String,
    },
    checkedItem: {
        type: Boolean,
        defaultValue: false
    },
})

Item.attachSchema(ItemSchema);

export default Item
