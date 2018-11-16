import {Meteor} from 'meteor/meteor';
import Item from './model';

Meteor.methods({
    addItem(data) {
        return Item.insert(data.titleItem);
    },
    deleteItem(id) {
        return Item.remove({_id: id});
    },
    checkItem(id) {
        const item = Item.findOne({_id: id})
        return Card.update({_id: id}, {$set: {checkedItem: !item.checkedItem}});
    },
})

export default Item;