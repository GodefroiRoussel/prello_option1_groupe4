import { Meteor } from 'meteor/meteor'
import Board from './model';
import '../List/index'
import List from "../List/model";
import jwt from "jsonwebtoken";

/**  
 * Method that returns the id of the board added  
 * params: data: Object:    titleBoard: Sting: Title of the board  
 *                          user: String: Username of the user  
 *                          team: String: Optionnal id of the team to create the board in  
 * API: require an Authorization Bearer token  
 *      url :   /boards 
 *      body:   titleBoard: Sting: Title of the board  
 *              user: String: Username of the user  
 *              team: String: Optionnal id of the team to create the board in  
 * return: the id of the board created or an error  
 */
Meteor.method("addBoard", function (data) {
    return Board.insert(data);
}, {
        url: "boards",
        getArgsFromRequest: function (request) {
            const token = request.authToken;
            const body = request.body;
            if (!body.user || !body.titleBoard) {
                throw new Meteor.Error(400, 'Missing Parameter');
            }
            var data = {};
            Object.keys(body).forEach(f => data[f] = body[f])
            if (data.team) {
                data.teams = [data.team];
            }
            data.admins = [body.user];
            data.members = [body.user];
            try {
                const decoded = jwt.verify(token, Meteor.settings.SECRET_KEY, {
                    ignoreExpiration: false,
                    issuer: Meteor.settings.ISSUER
                });
                if (decoded.scopes.includes('write'))
                    return [data];
                else
                    throw new Meteor.Error(403, 'Unauthorized', "You don't have access to this resource");
            } catch (err) {
                console.log(err);
                throw new Meteor.Error('Token Invalid', "This token is not valid");
            }
        },
        httpMethod: "POST"
    }
);

/**  
 * Method that returns the board   
 * params: id: String: Required the id of the board 
 *         userId: String: id of the user  
 * API: require an Authorization Bearer token  
 *      url :   /boards/:id 
 *      params: id: String: Required the id of the board 
 * return: the board 
 */
Meteor.method("getBoard", function (id, userId) {
    if (!userId)
        userId = Meteor.userId();

    const user = Meteor.call('getUser', userId)
    const username = user.username;
    return Board.findOne({ _id: id, members: { $elemMatch: { $eq: username } } });
}, {
        url: "boards/:id",
        getArgsFromRequest: function (request) {
            const token = request.authToken;
            const params = request.params;
            if (!params.id) {
                throw new Meteor.Error(400, 'Missing Parameter');
            }
            try {
                const decoded = jwt.verify(token, Meteor.settings.SECRET_KEY, {
                    ignoreExpiration: false,
                    issuer: Meteor.settings.ISSUER
                });
                if (decoded.scopes.includes('read'))
                    return [params.id, decoded.userId];
                else
                    throw new Meteor.Error(403, 'Unauthorized', "You don't have access to this resource");
            } catch (err) {
                console.log(err);
                throw new Meteor.Error('Token Invalid', "This token is not valid");
            }
        },
        httpMethod: "GET"
    }
);

/**  
 * Method that returns all members of a board 
 * params: id: String: Required the id of the board 
 *         userId: String: id of the user  
 * API: require an Authorization Bearer token  
 *      url :   /boards/:id/members 
 *      params: id: String: Required the id of the board 
 * return: all members of the board 
 */
Meteor.method("getMembersBoard", function (id, userId) {
    if (!userId)
        userId = Meteor.userId();

    const user = Meteor.call('getUser', userId)
    const username = user.username;

    const board = Board.findOne({ _id: id, members: { $elemMatch: { $eq: username } } })
    return board.members
}, {
        url: "boards/:id/members",
        getArgsFromRequest: function (request) {
            const token = request.authToken;
            const params = request.params;
            if (!params.id) {
                throw new Meteor.Error(400, 'Missing Parameter');
            }
            try {
                const decoded = jwt.verify(token, Meteor.settings.SECRET_KEY, {
                    ignoreExpiration: false,
                    issuer: Meteor.settings.ISSUER
                });
                if (decoded.scopes.includes('read'))
                    return [params.id, decoded.userId];
                else
                    throw new Meteor.Error(403, 'Unauthorized', "You don't have access to this resource");
            } catch (err) {
                console.log(err);
                throw new Meteor.Error('Token Invalid', "This token is not valid");
            }
        },
        httpMethod: "GET"
    }
);

Meteor.methods({
    updateBoardListId(data) {
        if (data.id && data.listId) {
            const board = Board.findOne(data.id)
            if (board) {
                const listsId = board.listsId
                listsId.push("" + data.listId);
                return Board.update({ _id: data.id }, { $set: { listsId: listsId } })
            }
        }
    },
    updateListsPositions(data) {
        return Board.update(
            { _id: data._id },
            { $set: { listsId: data.listsId } }
        )
    },
    //change position after delete or archive
    updateListsPositionsAfterArchiveOrDelete(data) { // data = board, idListArchived
        if (data.board._id && data.idListArchived) {
            const position = Meteor.call('findOneList', data.idListArchived).positionList
            const listsId = data.board.listsId
            let listsToUpdate = []
            let anteriorLists = []
            let listsNotDisplayed = []
            listsId.map(idList => {
                const list = Meteor.call('findOneList', idList)
                if (list.isArchivedList === false && list.isDeletedList === false) {
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
                Meteor.call('updatePosition', { idList: list._id, position: list.positionList - 1 })
                ids.push(list._id)
            })
            const listsOfBoard = [...anteriorLists, ...ids, ...listsNotDisplayed]
            return Board.update({ _id: data.board._id }, { $set: { listsId: listsOfBoard } })
        }
    },
    updateBoardTitle(data) {
        Board.update(
            { _id: data._id },
            { $set: { titleBoard: data.titleBoard } }
        )
        Meteor.call("addLabel", { _id: data._id })
        return Board.findOne(data._id)
    },
    updateCanComment(data) {
        return Board.update({ _id: data._id }, { $set: { canComment: data.canComment } })
    },
    updateInvitationsOpenedBoard(data) {
        return Board.update({ _id: data._id }, { $set: { invitationsOpenedBoard: data.invitationsOpenedBoard } })
    },
    updateTeamBoard(data) {
        var members = []
        data.teams.map(x => members.push(Meteor.call("getTeamById", x).members))
        var flat = _.reduceRight(members, function (a, b) { return a.concat(b); }, []);
        var unique = [...new Set(flat)];
        Board.update({ _id: data._id }, { $set: { members: unique } })
        return Board.update({ _id: data._id }, { $set: { teams: data.teams } })
    },
    updateLabelBoard(data) {
        var board = Meteor.call('getBoard', data._id)
        var labels = board.labels;
        labels.push(data.idLabel);
        return Board.update({ _id: data._id }, { $set: { labels: labels } })
    }
});

export default Board;