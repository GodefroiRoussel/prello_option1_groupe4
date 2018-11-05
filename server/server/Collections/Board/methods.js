import { Meteor } from 'meteor/meteor'
import Board from './model';


Meteor.methods({
    addBoard(message) {
        console.log("ser");
        const board = {
            titleBoard: message
       };
        return Board.insert(board)
    },
    getBoard(id) {
        console.log("coucou");
        return Board.findOne(id);
    }
});

export default Board;