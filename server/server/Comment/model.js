import {Meteor} from "meteor/meteor";
import SimpleSchema from "simpl-schema";


const Comment = new Meteor.Collection('comment');

const CommentSchema = new SimpleSchema({
    textComment: {
        type: String
    },
    dateComment: {
        type: Date
    },
    isDeletedComment: {
        type: Boolean,
        defaultValue: false,
    },
    authorId: {
        type: String
    }
});

Comment.attachSchema(CommentSchema);

export default Comment