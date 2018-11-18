import {Meteor} from 'meteor/meteor';
import List from './model';

Meteor.methods({
    /**
     * Provide the list identified by a given id
     * @param id The id of the list wanted
     * @returns {any} The list wanted
     */
    getList(id) {
        return List.findOne(id);
    },
    /**
     * Create a list
     * @param data The data necessary, it contains the titleList
     * @returns {any} The id of the list just created
     */
    addList(data) {
        return List.insert(data);
    },
    /**
     * Remove definitively the list from the collection
     * @param id The id of the list to remove
     * @returns {any} 1 if the deletion succeeded else 0
     */
    removeList(id){
        return List.remove({_id: id});
    },
    /**
     * Provide the list identified by a given id
     * @param id The id of the list wanted
     * @returns {any} The id of the list just created
     */
    findOneList(id) {
        return List.findOne(id)
    },
    /**
     * Update the position of the list
     * @param data The data necessary for the update, it contains _id the id of the list and the new position
     * @returns {any}
     */
    updatePosition(data) {
        return List.update( {_id: data.idList}, {$set: {positionList: data.position}})
    },
    /**
     * Update a list
     * @param data the data necessary for a complete update : titleList, positionList, isDeletedList, isArchivedList, cards
     * @returns {any} 1 if the update succeeded else 0
     */
    updateList(data) {
        return List.update(
            {_id:  data._id},
            {$set: {titleList: data.titleList, positionList: data.positionList, isDeletedList: data.isDeletedList, isArchivedList: data.isArchivedList, cards: data.cards}})
    },
    updateListTitle(data) {
        List.update(
            {_id: data._id},
            {$set: {titleList: data.titleList}}
        )
        return List.findOne(data._id)
    },
    addCardInList(data){ //data = idList, idCard
        const list = List.findOne(data.idList)
        const cards = list.cards
        cards.push(data.idCard)
        return List.update( {_id: data.idList}, {$set: {cards: cards}})
    },
    // update position of each card of the list according to the new position of one of them
    // idCard is the id of the card having a new position
    updateCardsPositions(data) { //data = {list, idCard}
        if(data.list._id && data.list.cards && data.idCard) {
            const card = Meteor.call('findOneCard',data.idCard) // the card for which the position has changed
            const newPos = card.positionCard // the new position of this anterior card
            const list = List.findOne(data.list._id)
            if(list) {
                const cardsId = list.cards
                let arrayCards = []
                let arrayNotDisplayedCards = []
                cardsId.map(cardId => {
                    if(cardId !== data.idCard) {
                        const c = Meteor.call('findOneCard',cardId)
                        if(c.isDeletedCard === false && c.isArchivedCard === false) {
                            arrayCards.push(c)
                        } else {
                            arrayNotDisplayedCards.push(c._id)
                        }
                    }
                })
                // order cards by position
                arrayCards.sort((c1, c2) => (c1.positionCard > c2.positionCard) ? 1 : -1)
                // array of the positions possible for the board
                let arrayPos = Array.from(new Array(cardsId.length), (val, index) => index + 1)
                // delete the position already taken by the list having idList as id
                arrayPos.splice(newPos - 1, 1)
                let newCardsList = [] // the array that contains lists id sorted by position
                // give the good position to other elements
                arrayCards.map(card => {
                    Meteor.call('updateCardPosition', {idCard: card._id, position: arrayPos[arrayCards.indexOf(card)]})
                    newCardsList.push(card._id)
                })
                // add the card which changed position
                newCardsList.splice(newPos - 1, 0, data.idCard)
                newCardsList = [...newCardsList, ...arrayNotDisplayedCards]
                // update the board's lists
                return List.update({_id: list._id}, {$set: {cards: newCardsList}})
            }
        }
    },
    updateCardsPositionsAfterArchiveOrDelete(data) { // data = idList, idCardArcOrDel
        if(data.idList && data.idCardArcOrDel) {
            const position = Meteor.call('findOneCard', data.idCardArcOrDel).positionCard
            const cardsId = data.list.cards
            let cardsToUpdate = []
            let anteriorCards = []
            let cardsNotDisplayed = []
            cardsId.map(idCard => {
                const card = Meteor.call('findOneCard', idCard)
                if(card.isArchivedCard === false && card.isDeletedCard === false) {
                    if (card.positionCard > position) {
                        cardsToUpdate.push(card)
                    } else {
                        anteriorCards.push(card._id)
                    }
                } else {
                    cardsNotDisplayed.push(card._id)
                }
            })
            let ids = []
            cardsToUpdate.map(card => {
                Meteor.call('updateCardPosition', {idCard: card._id, position: card.positionCard - 1})
                ids.push(card._id)
            })
            const cardsOfList = [...anteriorCards, ...ids, ...cardsNotDisplayed]
            return List.update({_id: data.list._id}, {$set: {cards: cardsOfList}})
        }
    },
    updateCardPositionInList(data){
        return List.update(
            {_id: data._id},
            {$set: {cards: data.cards}}
        )
    },
    updateCardPositionBetweenList(data){
        List.update({_id: data.startList._id},
            {$set: {cards: data.startList.cards}});
        List.update({_id: data.finishList._id},
            {$set: {cards: data.finishList.cards}})
    }
});

