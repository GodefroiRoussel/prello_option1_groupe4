import {Meteor} from 'meteor/meteor';
import Label from './model';
import Board from '../Board/model';


Meteor.publish('label', function() {
    const userid = Meteor.userId();
    const user = Meteor.users.findOne(userid);
    if(user){
        const boards = Board.find({members :{ $elemMatch: { $eq: user.username}}}).fetch();
        if(boards){
            const listLabel = boards.map(x => x.labels)
            var flat = _.reduceRight(listLabel, function(a, b) { return a.concat(b); }, []);
            return Label.find({_id: { $in: flat}}) 
        }
        
    }
});


export default Label;