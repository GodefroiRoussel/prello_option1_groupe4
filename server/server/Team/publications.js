import {Meteor} from 'meteor/meteor';
import Team from './model';

Meteor.publish('team', function() {
    let user = Meteor.userId();
    console.log(Meteor.users.findOne(user));
    //return (Team.find(element => element.members.includes(Meteor.users.find(user).username)));
    //return (Team.find({members: ["admin"]}))
    /*return Team.find({
        members: {$elemMatch: {_id: Meteor.call('getUser', user)}},
    })*/
    return Team.find();
})