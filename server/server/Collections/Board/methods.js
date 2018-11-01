import { Meteor } from 'meteor/meteor'
import Board from './publications';
Meteor.methods({
    addBoard(message) {
        const board = {
            titleBoard: message
       }
        /*return Board.insert(board)*/
        return Board.insert(board)
    },
    getBoard(id) {
        console.log("coucou");
        return Board.findOne(id);
    }
})