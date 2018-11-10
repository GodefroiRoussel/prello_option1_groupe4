import {Meteor} from 'meteor/meteor';
import Team from './model';

Meteor.publish('team', function() {
    const userid = Meteor.userId();
    const user = Meteor.users.findOne(userid);
    if(user){
        return(Team.find({members :{ $elemMatch: { $eq: user.username}}}));
    }
})