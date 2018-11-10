import { Meteor } from 'meteor/meteor'
import Board from './model';
import '../List/index'


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
    },
    // update position of each list of the board according to the new position of one of them
    // idList is the id of the list having a new position
    updateListsPositions(data) { //data = {board, idList}
        if(data.board._id && data.board.listsId && data.idList) {
            const list = Meteor.call('findOneList',data.idList) // the list for which the position has changed
            const newPos = list.positionList // the new position of this anterior list
            const board = Board.findOne(data.board._id)
            if(board) {
                const listId = board.listsId
                console.log(listId)
                let arrayLists = []
                let arrayNotDisplayedLists = []
                listId.map(listId => {
                    if(listId !== data.idList) {
                        console.log("azertyuiop")
                        const l = Meteor.call('findOneList',listId)
                        if(l.isDeletedList === false /*&& l.isArchived === false*/) {
                            console.log('a')
                            arrayLists.push(l)
                        } else {
                            console.log('b')
                            arrayNotDisplayedLists.push(l._id)
                        }
                    }
                })
                console.log(arrayLists)
                // order lists by position
                arrayLists.sort((l1, l2) => (l1.positionList > l2.positionList) ? 1 : -1)
                // array of the positions possible for the board
                let arrayPos = Array.from(new Array(listId.length), (val, index) => index + 1)
                // delete the position already taken by the list having idList as id
                arrayPos.splice(newPos - 1, 1)
                let newListsBoard = [] // the array that contains lists id sorted by position
                // give the good position to other elements
                arrayLists.map(list => {
                    Meteor.call('updatePosition', {idList: list._id, position: arrayPos[arrayLists.indexOf(list)]})
                    newListsBoard.push(list._id)
                })
                console.log(newListsBoard)

                // add the list which changed position
                newListsBoard.splice(newPos - 1, 0, data.idList)
                console.log('*', newListsBoard)
                newListsBoard = [...newListsBoard, ...arrayNotDisplayedLists]
                console.log('**', newListsBoard)
                // update the board's lists
                return Board.update({_id: board._id}, {$set: {listsId: newListsBoard}})
            }
        }
    }
});

export default Board;