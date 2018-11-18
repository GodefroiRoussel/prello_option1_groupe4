import { Meteor } from 'meteor/meteor'
import Todo from './methods';

Meteor.publish('todo', function() {  
    return Todo.find();
  })
