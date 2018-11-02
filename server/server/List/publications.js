import {Meteor} from 'meteor/meteor';

const List = new Meteor.Collection('list');

Meteor.publish('list', function() {
    return List.find();
});

export default List;