import { Meteor } from 'meteor/meteor';
import Security from '../security';

const Todo = new Meteor.Collection('todo');

Meteor.methods({
    getTodo(id) {
        return Todo.findOne(id);
    },
    getTodos() {
        return Todo.find().fetch();
    },
    'addTodo'(message) {
        /*check(message, {
            message : String,
        });
     
        // Make sure the user is logged in before inserting a task
        if (! Meteor.userId()) {
          throw new Meteor.Error('not-authorized');
        }*/
        Security.checkLoggedIn(this.userId);
        return Todo.insert(message);
      },
    removeTodo(id) {
        return Todo.remove({_id: id});
    },
    editTodo(id, finished) {
        return Todo.update({_id: id}, {$set: {finished: finished}});
    },
});

export default Todo
