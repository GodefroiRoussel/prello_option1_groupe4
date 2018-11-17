import {Meteor} from 'meteor/meteor';
import Label from './model';

Meteor.methods({
    getLabels() {
        return Label.find().fetch();
    },
    addLabel() {
        return Label.insert({titleLabel: "Label Sticker", colorLabel: [225, 4, 4]})
    },
    removeLabel(id) {
        return Label.remove({_id: id});
    },
    updateColorLabel(data){
        return Label.update({_id: data._id}, {$set: {colorLabel: data.colorLabel}})
    },
    findOneLabel(id) {
        return Label.findOne(id);
    }
});