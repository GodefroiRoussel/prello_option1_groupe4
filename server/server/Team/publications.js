import {Meteor} from 'meteor/meteor';
import Team from './model';

Meteor.publish('team', function() {
    const userid = Meteor.userId();
    const user = Meteor.users.findOne(userid);
    if(user){
        return(Team.find({members :{ $elemMatch: { $eq: user.username}}}));
    }
    //return (Team.find(element => element.members.includes(Meteor.users.find(user).username)));
    //return (Team.find({members: ["admin"]}))
    /*return Team.find({
        members: {$elemMatch: {_id: Meteor.call('getUser', user)}},
    })*/
})