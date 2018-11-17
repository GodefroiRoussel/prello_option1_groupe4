import assert from "assert";
import './board.test'
import Card from '/server/Card/methods'
import List from '/server/List/methods'
import chai from 'chai'

describe("server", function () {
    it("package.json has correct name", async function () {
        const { name } = await import("../package.json");
        assert.strictEqual(name, "server");
    });

    if (Meteor.isServer) {
        it("server is not client", function () {
            assert.strictEqual(Meteor.isClient, false);
        });
    }
});

/* ------------------------- TESTS ON BOARD -----------------------*/

describe("board", function() {
    it('should add new id to list id', function() {
        const boardId = Meteor.call('addBoard',{titleBoard: "myboard", admins: ["idAdmin"], members: ["idM1"]})
        Meteor.call('updateBoardListId',{id: boardId, listId: "l1Id"}, () => {
            const board = Meteor.call('getBoard',{_id: boardId})
            assert.deepEqual(board.listsId, ["l1Id"])
        })
    });

    it('should update the title of the board', function() {
        const boardId = Meteor.call('addBoard',{titleBoard: "myboard", admins: ["idAdmin"], members: ["idM1"]})
        Meteor.call('updateBoardTitle',{_id: boardId, titleBoard: "MyNewTitle"}, () => {
            const board = Meteor.call('getBoard',{_id: boardId})
            assert.strictEqual(board.titleBoard, "MyNewTitle")
        })
    });
})

/* ------------------------- TESTS ON LiST -----------------------*/

describe("list", function() {
    it('should add new id to card id', function () {
        const listId = Meteor.call('addList', {titleList: "myList", positionList: 1, cards: []})
        const cardId = Meteor.call('addCard', {titleCard: 'MyCard', listId: listId})
        Meteor.call('addCardInList', {idList: listId, idCard: cardId}, () => {
            const list = Meteor.call('getList', listId)
            assert.deepEqual(list.cards, [cardId])
        })
    });

    it('should update cards in list', function () {
        const listId = Meteor.call('addList', {titleList: "myList", positionList: 1, cards: ["card1", "card2"]})
        Meteor.call('updateCardPositionInList', {_id: listId, cards: ["card2", "card1"]}, () => {
            const list = Meteor.call('getList', listId)
            assert.deepEqual(list.cards, ["card2", "card1"])
        })
    });

    it('should update positionOfCards between lists', function () {
        const listId1 = Meteor.call('addList', {titleList: "myList", positionList: 1, cards: ["card1", "card2", "card3"]})
        const listId2 = Meteor.call('addList', {titleList: "myList", positionList: 1, cards: ["card1b", "card2b", "card3b"]})
        Meteor.call('updateCardPositionBetweenList', {startList: {_id: listId1, cards:["card1", "card3"]}, finishList: {_id: listId2, cards:["card1b", "card2b", "card2", "card3b"]}}, () => {
            const list2 = Meteor.call('getList', listId2)
            assert.deepEqual(list2.cards, ["card1b", "card2b", "card2", "card3b"])
        })
    });

    it('should update title of the list', function () {
        const listId = Meteor.call('addList', {titleList: "myList", positionList: 1, cards: ["card1", "card2"]})
        Meteor.call('updateListTitle', {_id: listId, titleList: "newTitleList"}, () => {
            const list = Meteor.call('getList', listId)
            assert.strictEqual(list.titleList, "newTitleList")
        })
    });
})

/* ------------------------- TESTS ON CARD -----------------------*/

describe("card", function() {
    it('should update the title of the card to newTitle', function () {
        const cardId = Meteor.call('addCard', {titleCard: 'MyCard', listId: 'listId'})
        Meteor.call('updateCardTitle', {_id: cardId, titleCard: "newTitle"}, () => {
            const card = Meteor.call('findOneCard', cardId)
            assert.strictEqual(card.titleCard, "newTitle")
        })
    });

    it('should update the description of the card to newDesc', function () {
        const cardId = Meteor.call('addCard', {titleCard: 'MyCard', listId: 'listId'})
        Meteor.call('updateCardDescription', {_id: cardId, descriptionCard: "newDesc"}, () => {
            const card = Meteor.call('findOneCard', cardId)
            assert.strictEqual(card.descriptionCard, "newDesc")
        })
    });

    it('should update the card to billable', function () {
        const cardId = Meteor.call('addCard', {titleCard: 'MyCard', listId: 'listId'})
        Meteor.call('updateCardBillable', {_id: cardId, billable: true}, () => {
            const card = Meteor.call('findOneCard', cardId)
            assert.strictEqual(card.billable, true)
        })
    })

    it('should update the position of the card to 1', function () {
        const cardId = Meteor.call('addCard', {titleCard: 'MyCard', listId: 'listId'})
        Meteor.call('updateCardPosition', {idCard: cardId, position: 1}, () => {
            const card = Meteor.call('findOneCard', cardId)
            assert.strictEqual(card.positionCard, 1)
        })
    });

    it('should add a member to the card', function () {
        const cardId = Meteor.call('addCard', {titleCard: 'MyCard', listId: 'listId'})
        Meteor.call('addContributorCard', {idCard: cardId, idMember: "myMember"}, () => {
            const card = Meteor.call('findOneCard', cardId)
            assert.deepEqual(card.assignedUsers, ["myMember"])
        })
    });

    it('should delete the member from the card', function () {
        const cardId = Meteor.call('addCard', {titleCard: 'MyCard', listId: 'listId', assignedUsers: ["m1", "m2", "m3"]})
        Meteor.call('deleteContributorCard', {idCard: cardId, idMember: "m2"}, () => {
            const card = Meteor.call('findOneCard', cardId)
            assert.deepEqual(card.assignedUsers, ["m1", "m3"])
        })
    });

    it('should add a label to the card', function () {
        const cardId = Meteor.call('addCard', {titleCard: 'MyCard', listId: 'listId'})
        Meteor.call('addLabelCard', {idCard: cardId, idLabel: "myLabel"}, () => {
            const card = Meteor.call('findOneCard', cardId)
            assert.deepEqual(card.labels, ["myLabel"])
        })
    });

    it('should delete the label from the card', function () {
        const cardId = Meteor.call('addCard', {titleCard: 'MyCard', listId: 'listId', labels: ["lab1", "lab2"]})
        Meteor.call('deleteLabelCard', {idCard: cardId, idLabel: "lab2"}, () => {
            const card = Meteor.call('findOneCard', cardId)
            assert.deepEqual(card.labels, ["lab1"])
        })
    });

    it('should update the card as deleted', function () {
        const cardId = Meteor.call('addCard', {titleCard: 'MyCard', listId: 'listId'})
        Meteor.call('deleteCard', cardId, () => {
            const card = Meteor.call('findOneCard', cardId)
            assert.strictEqual(card.isDeletedCard, true)
        })
    });

    it('should update the card as archived', function () {
        const cardId = Meteor.call('addCard', {titleCard: 'MyCard', listId: 'listId'})
        Meteor.call('archiveCard', cardId, () => {
            const card = Meteor.call('findOneCard', cardId)
            assert.strictEqual(card.isArchivedCard, true)
        })
    });

    it('should update the card as unarchived', function () {
        const cardId = Meteor.call('addCard', {titleCard: 'MyCard', listId: 'listId', isArchivedCard: true})
        Meteor.call('unarchiveCard', cardId, () => {
            const card = Meteor.call('findOneCard', cardId)
            assert.strictEqual(card.isArchivedCard, false)
        })
    });

    it('should add comment to the card', function () {
        const cardId = Meteor.call('addCard', {titleCard: 'MyCard', listId: 'listId'})
        Meteor.call('addCommentCard', {idCard: cardId, idComment: "myComId"}, () => {
            const card = Meteor.call('findOneCard', cardId)
            assert.deepEqual(card.comments, ["myComId"])
        })
    });

    it('should delete the comment from the card', function () {
        const cardId = Meteor.call('addCard', {titleCard: 'MyCard', listId: 'listId', comments: ["com1", "com2", "com3"]})
        Meteor.call('deleteCommentCard', {idCard: cardId, idComment: "com2"}, () => {
            const card = Meteor.call('findOneCard', cardId)
            assert.deepEqual(card.comments, ["com1", "com3"])
        })
    });

    it('should tell the card is billable', function () {
        const cardId = Meteor.call('addCard', {titleCard: 'MyCard', listId: 'listId', billable: true})
            assert.strictEqual(Meteor.call('isBillableCard', cardId), true)
    });
})

/* ------------------------- TESTS ON TEAM -----------------------*/

describe("team", function() {
    it('should update the title of the card to newTitle', function () {
        const cardId = Meteor.call('addCard', {titleCard: 'MyCard', listId: 'listId'})
        Meteor.call('updateCardTitle', {_id: cardId, titleCard: "newTitle"}, () => {
            const card = Meteor.call('findOneCard', cardId)
            assert.strictEqual(card.titleCard, "newTitle")
        })
    });
})