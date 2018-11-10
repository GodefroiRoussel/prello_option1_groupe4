import { Meteor } from 'meteor/meteor'
import Board from './model';


Meteor.methods({
    addBoard(data) {
        return Board.insert(data);
    },
    getBoard(id) {
        return Board.findOne(id);
    },
    getAllBoard(){
        return Board.find();
    },
    updateBoardListId(data){
        if(data.id && data.listId){
            const board = Board.findOne(data.id)
            if(board){
                const listsId = board.listsId
                listsId.push(""+data.listId);
                return Board.update({_id: data.id}, {$set: {listsId: listsId}})
            }
        }
    }
});

export default Board;