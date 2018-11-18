import { Meteor } from 'meteor/meteor'
import Board from './model';
import '../List/index'
import List from "../List/model";


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
    getMembersBoard(id) {
        const board = Board.findOne({_id: id})
        return board.members
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
    findOneBoard(id) {
       return Board.findOne({_id: id})
    },
    // update position of each list of the board according to the new position of one of them
    // idList is the id of the list having a new position
    /*updateListsPositions(data) { //data = {board, idList}
        if(data.board._id && data.board.listsId && data.idList) {
            const list = Meteor.call('findOneList',data.idList) // the list for which the position has changed
            const newPos = list.positionList // the new position of this anterior list
            const board = Board.findOne(data.board._id)
            if(board) {
                const listId = board.listsId
                let arrayLists = []
                let arrayNotDisplayedLists = []
                listId.map(listId => {
                    if(listId !== data.idList) {
                        const l = Meteor.call('findOneList',listId)
                        if(l.isDeletedList === false && l.isArchived === false) {
                            arrayLists.push(l)
                        } else {
                            arrayNotDisplayedLists.push(l._id)
                        }
                    }
                })
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
                // add the list which changed position
                newListsBoard.splice(newPos - 1, 0, data.idList)
                newListsBoard = [...newListsBoard, ...arrayNotDisplayedLists]
                // update the board's lists
                return Board.update({_id: board._id}, {$set: {listsId: newListsBoard}})
            }
        }
    },*/
    updateListsPositions(data) {
        return Board.update(
            {_id: data._id},
            {$set: {listsId: data.listsId}}
        )
    },
    //change position after delete or archive
    updateListsPositionsAfterArchiveOrDelete(data) { // data = board, idListArchived
        if(data.board._id && data.idListArchived) {
            const position = Meteor.call('findOneList', data.idListArchived).positionList
            const listsId = data.board.listsId
            let listsToUpdate = []
            let anteriorLists = []
            let listsNotDisplayed = []
            listsId.map(idList => {
                const list = Meteor.call('findOneList', idList)
                if(list.isArchivedList === false && list.isDeletedList === false) {
                    if (list.positionList > position) {
                        listsToUpdate.push(list)
                    } else {
                        anteriorLists.push(list._id)
                    }
                } else {
                    listsNotDisplayed.push(list._id)
                }
            })
            let ids = []
            listsToUpdate.map(list => {
                Meteor.call('updatePosition', {idList: list._id, position: list.positionList - 1})
                ids.push(list._id)
            })
            const listsOfBoard = [...anteriorLists, ...ids, ...listsNotDisplayed]
            return Board.update({_id: data.board._id}, {$set: {listsId: listsOfBoard}})
        }
    },

    updateBoardTitle(data) {
        Board.update(
            {_id: data._id},
            {$set: {titleBoard: data.titleBoard}}
        )
        Meteor.call("addLabel", {_id: data._id})
        return Board.findOne(data._id)
    },

    updateCanComment(data){
        return Board.update({_id: data._id}, {$set: {canComment: data.canComment}})
    },
    updateInvitationsOpenedBoard(data){
        return Board.update({_id: data._id}, {$set: {invitationsOpenedBoard: data.invitationsOpenedBoard}})
    },
    updateTeamBoard(data){
        var members = []
        data.teams.map(x => members.push(Meteor.call("getTeamById", x).members))
        var flat = _.reduceRight(members, function(a, b) { return a.concat(b); }, []);
        var unique = [...new Set(flat)];
        Board.update({_id: data._id}, {$set: {members: unique}})
        return Board.update({_id: data._id}, {$set: {teams: data.teams}})
    },
    updateLabelBoard(data){
        var board = Meteor.call('getBoard', data._id)
        var labels = board.labels;
        labels.push(data.idLabel);
        return Board.update({_id: data._id}, {$set: {labels: labels}})
    }
});

export default Board;