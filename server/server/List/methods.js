import {Meteor} from 'meteor/meteor';
import List from './model';

Meteor.methods({
    getList(id) {
        return List.findOne(id);
    },
    addList(data) {
        return List.insert(data);
    },
    /*remove the list from db */
    removeList(id){
        return List.remove({_id: id});
    },
    findOneList(id) {
        return List.findOne({_id: id})
    },
    updatePosition(data) { // data = idList, position
        return List.update( {_id: data.idList}, {$set: {positionList: data.position}})
    },
    updateList(data) {
        return List.update(
            {_id:  data._id},
            {$set: {titleList: data.titleList, positionList: data.positionList, isDeletedList: data.isDeletedList, isArchivedList: data.isArchivedList, cards: data.cards}})
    }
});
