import { Meteor } from 'meteor/meteor'
import Board from './model'

Meteor.publish('board', function() {
    const userid = Meteor.userId();
    const user = Meteor.users.findOne(userid);
    if(user){
        console.log(user.username);
        return(Board.find({members :{ $elemMatch: { $eq: user.username}}}));
    }
});