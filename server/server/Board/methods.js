import { Meteor } from 'meteor/meteor'
import Board from './model';


Meteor.methods({
    addBoard(data) {
        return Board.insert(data);
    },
    getBoard(id) {
        console.log("coucou");
        return Board.findOne(id);
    },
    getAllBoard(){
        return Board.find();
    }
});

export default Board;