import {Meteor} from 'meteor/meteor';
import Item from './model';

Meteor.methods({
    findOneItem(id) {
        return Item.findOne({_id: id})
    },
    addItem(data) {
        return Item.insert(data);
    },
    deleteItem(id) {
        return Item.remove({_id: id});
    },
    checkItem(id) {
        const item = Item.findOne({_id: id})
        return Item.update({_id: id}, {$set: {checkedItem: !item.checkedItem}});
    },
})

export default Item;