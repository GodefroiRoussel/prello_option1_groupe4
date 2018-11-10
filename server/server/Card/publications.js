import { Meteor } from 'meteor/meteor'
import Card from './model'
import Board from '../Board/model';

Meteor.publish('card', function() {
    const userid = Meteor.userId();
    const user = Meteor.users.findOne(userid);
    if(user){
        const boards = Board.find({members :{ $elemMatch: { $eq: user.username}}}).fetch();
        if(boards){
            const listId = boards.map(x => x.listsId)
            var flat = _.reduceRight(listId, function(a, b) { return a.concat(b); }, []);
            return Card.find({listId: { $in: flat}}) 
        }
    }
});