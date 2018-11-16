import {Meteor} from 'meteor/meteor';
import Comment from './model';


Meteor.methods({

    findOneComment(id) {
        return comment.findOne({_id: id})
    },
    addComment(data) {

        return Comment.insert(data);
    },
    deleteComment(id) {
        return Comment.delete({_id: id})
    },

})

