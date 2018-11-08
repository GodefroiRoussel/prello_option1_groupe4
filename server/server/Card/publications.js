import { Meteor } from 'meteor/meteor'
import Card from './model'

Meteor.publish('Card', function() {
    return Card.find();
});