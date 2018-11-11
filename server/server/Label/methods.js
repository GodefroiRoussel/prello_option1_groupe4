import {Meteor} from 'meteor/meteor';
import Label from './model';

Meteor.methods({
    getLabels() {
        return Label.find().fetch();
    },
    addLabel(data) {
        return Label.insert(data);
    },
    removeLabel(id) {
        return Label.remove({_id: id});
    },
    findOneLabel(id) {
        return Label.findOne(id);
    }
});