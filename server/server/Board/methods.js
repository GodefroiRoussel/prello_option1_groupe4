import { Meteor } from 'meteor/meteor'
import Board from './model';
import '../List/index'

Meteor.methods({
    /**
     * Add a new board
     *
     * @param data The data necessary to create a board, it contains the titleBoard
     * @returns {any} The id of the board just created
     */
    addBoard(data) {
        return Board.insert(data);
    },
    /**
     * Provide the board identified by the given id
     * @param id The id of the board
     * @returns {any} An object being the board wanted
     */
    getBoard(id) {
        return Board.findOne(id);
    },
    /**
     * Provide all the boards registered
     * @returns {Mongo.Cursor} The collection of boards
     */
    getAllBoard(){
        return Board.find();
    },
    /**
     * Provide the members of a given board
     * @param id The id of the board from which we want the members
     * @returns {*} The array of objects members
     */
    getMembersBoard(id) {
        const board = Board.findOne({_id: id})
        return board.members
    },
    /**
     * Update the array of lists id of the board
     * @param data The data necessary for the update, it contains the id of the board we want to update lists and the listId of the list we want to add in
     * @returns {any} 1 if the update succeeded else 0
     */
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
    /**
     * Update the list of lists id of a given board
     * @param data The data necessary for the update, it contains _id the id of the board to update and listsId the new array of lists id
     * @returns {any} 1 if the update succeeded else 0
     */
    updateListsPositions(data) {
        return Board.update(
            {_id: data._id},
            {$set: {listsId: data.listsId}}
        )
    },
    /**
     * Update the lists positions when an update or a deletion occured
     * @param data The data necessary for the update, it contains the board object and the id of the list just archived or deleted (idListArchived)
     * @returns {any} 1 if the update succeeded else 0
     */
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

    /**
     * Update the board title
     * @param data The data necessary for the update, it contains _id the id of the board to update and the new titleBoard
     * @returns {any} The board updated
     */
    updateBoardTitle(data) {
        Board.update(
            {_id: data._id},
            {$set: {titleBoard: data.titleBoard}}
        )
        Meteor.call("addLabel", {_id: data._id})
        return Board.findOne(data._id)
    },

    /**
     * Update the possibility to comment or not a board
     * @param data The data necessary for the update, it contains _id, the id of the board to update and canComment a boolean telling if comments can occur on the board
     * @returns {any} 1 if the update succeeded else 0
     */
    updateCanComment(data){
        return Board.update({_id: data._id}, {$set: {canComment: data.canComment}})
    },
    /**
     * Update the possibility to invite members on the board
     * @param data The necessary data for the update, it contains _id the id of the board and invitationsOpenedBoard a boolean telling if invitations are possibe on the board or not
     * @returns {any} 1 if the update succeeded else 0
     */
    updateInvitationsOpenedBoard(data){
        return Board.update({_id: data._id}, {$set: {invitationsOpenedBoard: data.invitationsOpenedBoard}})
    },
    /**
     * Update the teams of the board
     * @param data The necessary data for the update, it contains _id the id of the board and the new array of teams
     * @returns {any} 1 if the update succeeded else 0
     */
    updateTeamBoard(data){
        var members = []
        data.teams.map(x => members.push(Meteor.call("getTeamById", x).members))
        var flat = _.reduceRight(members, function(a, b) { return a.concat(b); }, []);
        var unique = [...new Set(flat)];
        Board.update({_id: data._id}, {$set: {members: unique}})
        return Board.update({_id: data._id}, {$set: {teams: data.teams}})
    },
    /**
     * Update the labels of a board
     * @param data The necessary data for the update
     * @returns {any} 1 if the update succeeded else 0
     */
    updateLabelBoard(data){
        var board = Meteor.call('getBoard', data._id)
        var labels = board.labels;
        labels.push(data.idLabel);
        return Board.update({_id: data._id}, {$set: {labels: labels}})
    }
});

export default Board;