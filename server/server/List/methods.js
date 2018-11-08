import {Meteor} from 'meteor/meteor';
import List from './model';

Meteor.methods({
    getList(id) {
        return List.findOne(id);
    },
    getLists() {
        return List.find().fetch();
    },
    getCards(id) {
        return List.find({id}).cards
    },
    //TODO: take care of position list (change model too)
    addList(message) {
        console.log("addList");
        const list = {
            titleList: message
        };
        return List.insert(list);
    },
    removeList(id){
        return List.remove({_id: id});
    },
})

export default List;