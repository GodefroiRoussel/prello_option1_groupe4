import {Meteor} from 'meteor/meteor';
import List from './model';

Meteor.methods({
    getList(id) {
        return List.findOne(id);
    },
    getList() {
        return List.find().fetch();
    },
    addList(data) {
        return List.insert(data);
    },
    removeList(id){
        return List.remove({_id: id});
    },
})