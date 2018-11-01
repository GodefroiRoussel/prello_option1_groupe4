import {Meteor} from 'meteor/meteor';
import List from './publications';

Meteor.methods({
    getList(id) {
        return List.findOne(id);
    },
    getList() {
        return List.find().fetch();
    },
    addList(message) {
        return List.insert({message: message});
    },
    removeList(id){
        return List.remove({_id: id});
    },
})