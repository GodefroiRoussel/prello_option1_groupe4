import { Meteor } from 'meteor/meteor'
import Client from './model'

Meteor.publish('client', function () {
    const userid = Meteor.userId();
    const user = Meteor.users.findOne(userid);
    if (user) {
        return (Client.find({ createdBy: userid }));
    }
});