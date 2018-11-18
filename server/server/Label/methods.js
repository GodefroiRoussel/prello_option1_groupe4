import {Meteor} from 'meteor/meteor';
import Label from './model';

Meteor.methods({
    /**
     * Provide all the label in the collection
     * @returns {any} An array containing all of the labels
     */
    getLabels() {
        return Label.find().fetch();
    },
    /**
     * Create a label
     * @returns {any} The id of the just created label
     */
    addLabel() {
        return Label.insert({titleLabel: "Label Sticker", colorLabel: [225, 4, 4]})
    },
    /**
     * Remove definitely the lael from the collection
     * @param id The id of the label to delete
     * @returns {any} 1 if the deletion succeeded else 0
     */
    removeLabel(id) {
        return Label.remove({_id: id});
    },
    /**
     * Update the color of the label
     * @param data The necessary data to update the label's color, it contains _id the id of the label and the new colorLabel
     * @returns {any} 1 if the update succeeded else 0
     */
    updateColorLabel(data){
        return Label.update({_id: data._id}, {$set: {colorLabel: data.colorLabel}})
    },
    /**
     * Update the title of a label
     * @param data The data necessary for the update, it contains _id the id of the label and the new titleLabel
     * @returns {any}
     */
    updateNameLabel(data){
        return Label.update({_id: data._id}, {$set:{titleLabel: data.titleLabel}})
    },
    /**
     * Provide the label identified by a given id
     * @param id The id of the label wanted
     * @returns {any} The label wanted
     */
    findOneLabel(id) {
        return Label.findOne(id);
    }
});