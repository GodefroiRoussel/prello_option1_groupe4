import {Meteor} from 'meteor/meteor';

const User = new Meteor.Collection('user');

Meteor.publish('user', function() {
    return User.find();
})

export default User;