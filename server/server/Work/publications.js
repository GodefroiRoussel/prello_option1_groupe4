import {Meteor} from 'meteor/meteor';
import Work from './model';

Meteor.publish('works', function() {
    const userid = Meteor.userId();
    const user = Meteor.users.findOne(userid);
    if(user){
        return(Work.find({idUser :{ $elemMatch: { $eq: userid}}}));
    }
})