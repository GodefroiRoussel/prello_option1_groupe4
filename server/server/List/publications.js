import {Meteor} from 'meteor/meteor';
import List from './model';
import Board from '../Board/model';


Meteor.publish('list', function() {
    const userid = Meteor.userId();
    const user = Meteor.users.findOne(userid);
    if(user){
        const boards = Board.find({members :{ $elemMatch: { $eq: user.username}}}).fetch();
        if(boards){
            const listId = boards.map(x => x.listsId)
            var flat = _.reduceRight(listId, function(a, b) { return a.concat(b); }, []);
            return List.find({_id: { $in: flat}}) 
        }
        
    }
});


export default List;