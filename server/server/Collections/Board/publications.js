import { Meteor } from 'meteor/meteor'
import Board from './model'

Meteor.publish('Board', function() {
    return Board.find();
});