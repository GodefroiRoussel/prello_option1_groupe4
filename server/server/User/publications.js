import {Meteor} from 'meteor/meteor';
import User from './model';

Meteor.publish('accounts', function() {
    return Accounts.find();
})

