import { Meteor } from 'meteor/meteor'
import List from './model'

Meteor.publish('List', function() {
    return List.find();
});