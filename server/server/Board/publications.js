import { Meteor } from 'meteor/meteor'
import Board from './model'

Meteor.publish('board', function() {
    const userid = Meteor.userId();
    const user = Meteor.users.findOne(userid);
    if(user){
        return(Board.find({members :{ $elemMatch: { $eq: user.username}}}));
    }
});