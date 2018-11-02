import {Meteor} from 'meteor/meteor';
import User from './model';

Meteor.publish('user', function() {
    return User.find();
})

