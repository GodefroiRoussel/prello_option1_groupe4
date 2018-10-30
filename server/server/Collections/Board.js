/*import { Meteor } from 'meteor/meteor'

// define the Board schema
import {check} from "meteor/check";

const Board = new Meteor.Collection('Board');

Board.schema = new SimpleSchema({
    name: {type: String},
    defaultTest: {type: Number, defaultValue: 0}
});


Meteor.methods({
    addBoard(message) {
        const board = {
            name: message
        }
        Board.schema.validate(board);
        return Board.insert({name: message})
    },
    getBoard(id) {
        return Board.findOne(id);
    }
)};*/