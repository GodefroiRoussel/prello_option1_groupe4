import {Meteor} from 'meteor/meteor';
import Comment from './model';


Meteor.methods({

    /**
     * Provide the comment identified by a given id
     * @param id The id of the comment wanted
     * @returns {any | void} The comment wanted
     */
    findOneComment(id) {
        return comment.findOne({_id: id})
    },
    /**
     * Create a comment
     * @param data The necessary data to create a comment
     * @returns {any} The id of the comment just created
     */
    addComment(data) {
        return Comment.insert(data);
    },
    /**
     * Remove definitely the comment from the collection
     * @param id The id of the comment
     * @returns {any} 1 if the deletion succeeded else 0
     */
    deleteComment(id) {
        return Comment.remove({_id: id})
    },

})

