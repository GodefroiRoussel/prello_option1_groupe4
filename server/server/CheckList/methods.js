import {Meteor} from 'meteor/meteor';
import CheckList from './model';

Meteor.methods({
    addCheckList(data) {
        return CheckList.insert(data.titleItem);
    },
    deleteCheckList(id) {
        return CheckList.remove({_id: id});
    },
    addItemToCheckList(data) { // data = idCheckList, idItem
        const checklist = CheckList.findOne({_id: data.idCheckList})
        var items = checklist.items
        items.push(data.idItem)
        return CheckList.update({_id: data.idCheckList}, {$set: {items: items}});
    },
    deleteItemFromCheckList(data) { // data = idCheckList, idItem
        const checklist = CheckList.findOne({_id: data.idCheckList})
        var items = checklist.items
        const position = items.indexOf(data.idItem)
        items.splice(position, 1)
        CheckList.update( {_id: data.idCheckList}, {$set: {items: items}})
        return CheckList.findOne({_id: data.idCheckList});
    },
})

export default Item;