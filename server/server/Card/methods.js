import {Meteor} from 'meteor/meteor';
import Card from './model';

Meteor.methods({
    /**
     * Provide the card identified by a given id
     * @param id The id of the card wanted
     * @returns {any} The card wanted
     */
    getCard(id) {
        return Card.findOne(id);
    },
    /**
     * Provide all the cards of the collection
     * @returns {any} The array gathering all the cards
     */
    getCards() {
        return Card.find().fetch();
    },
    /**
     * Create a card
     * @param data the necessary data to add a card, it contains the titleCard
     * @returns {any} The id of the new card just created
     */
    addCard(data) {
        return Card.insert(data);
    },
    /**
     * Remove a card from the collection
     * @param id The id of the card we want definitely remove
     * @returns {any} 1 if it succeeded else 0
     */
   removeCard(id){
        return Card.remove({_id: id});
    },
    /**
     * Find the card identified by a given id
     * @param id The id of the card wanted
     * @returns {any} The card wanted
     */
    findOneCard(id) {
        return Card.findOne(id);
    },
    /**
     * Update the title of the card
     * @param data The data necessary for the update, it contains _id the id of the card to update and the new titleCard
     * @returns {any} The card updated
     */
    updateCardTitle(data) {
        Card.update(
            {_id: data._id},
            {$set: {titleCard: data.titleCard}})
        return Card.findOne({_id: data._id})
    },
    /**
     * Update the card description
     * @param data The data necessary for the update, it contains _id the id of the card and the new descriptionCard
     * @returns {any} The card updated
     */
    updateCardDescription(data) {
        Card.update(
            {_id: data._id},
            {$set: {descriptionCard: data.descriptionCard}})
        return Card.findOne({_id: data._id})
    },
    /**
     * Update a card as billable or not billable
     * @param data The data necessary for the update, it contains _id the id of the card and a boolean billable telling if the card is billable or not
     * @returns {any} The card updated
     */
    updateCardBillable(data) {
        Card.update(
            {_id: data._id},
            {$set: {billable: data.billable}})
        return Card.findOne({_id: data._id})
    },
    /**
     * Update the card position
     * @param data The data necessary for the update, it contains the idCard and the new position
     * @returns {any} 1 if the update succeeded else 0
     */
    updateCardPosition(data) { // data = idCard, position
        return Card.update( {_id: data.idCard}, {$set: {positionCard: data.position}})
    },
    /**
     * Add a contributor (assigned member) to the card
     * @param data The data necesary for the update, it contains the idCard and the idMember to add
     * @returns {any} The card updated
     */
    addContributorCard(data) { //data = idCard, idMember
        const card = Card.findOne(data.idCard)
        const membersInBoard = Meteor.call("getBoard", data.idBoard).members
        var members = card.assignedUsers
        if(membersInBoard.includes(data.idMember) && !card.assignedUsers.includes(data.idMember)){
            members.push(data.idMember)
            Card.update( {_id: data.idCard}, {$set: {assignedUsers: members}})
        }
        return Card.findOne({_id: data.idCard})
    },
    /**
     * Delete a contributor (assigned member) from the card
     * @param data The data necesary for the update, it contains the idCard and the idMember to delete
     * @returns {any} The card updated
     */
    deleteContributorCard(data) { //data = idCard, idMember
        const card = Card.findOne(data.idCard)
        const members = card.assignedUsers
        const position = members.indexOf(data.idMember)
        members.splice(position, 1)
        Card.update( {_id: data.idCard}, {$set: {assignedUsers: members}})
        return Card.findOne({_id: data.idCard})
    },
    /**
     * Add a label to the card
     * @param data The data necesary for the update, it contains the idCard and the idLabel to add
     * @returns {any} The card updated
     */
    addLabelCard(data) { //data = idCard, idLabel
        const card = Card.findOne(data.idCard)
        const labels = card.labels
        labels.push(data.idLabel)
        Card.update( {_id: data.idCard}, {$set: {labels: labels}})
        return Card.findOne({_id: data.idCard})
    },
    /**
     * Delete a label from the card
     * @param data The data necesary for the update, it contains the idCard and the idLabel to delete
     * @returns {any} The card updated
     */
    deleteLabelCard(data) { //data = idCard, idLabel
        const card = Card.findOne(data.idCard)
        const labels = card.labels
        const position = labels.indexOf(data.idLabel)
        labels.splice(position, 1)
        Card.update( {_id: data.idCard}, {$set: {labels: labels}})
        return Card.findOne({_id: data.idCard})
    },
    /**
     * Update the card as deleted
     * @param id The id of the card
     * @returns {any} The card updated
     */
    deleteCard(id) {
        Card.update( {_id: id}, {$set: {isDeletedCard: true}})
        return Card.findOne({_id: id})
    },
    /**
     * Update the card as archived
     * @param id The id of the card
     * @returns {any} The card updated
     */
    archiveCard(id) {
        Card.update( {_id: id}, {$set: {isArchivedCard: true}})
        return Card.findOne({_id: id})

    },
    /**
     * Update the card as unarchived
     * @param id The id of the card
     * @returns {any} The card updated
     */
    unarchiveCard(id) {
        Card.update( {_id: id}, {$set: {isArchivedCard: false}})
        return Card.findOne({_id: id})

    },
    /**
     * Add a comment to the card
     * @param data The data necessary for the update, it contains the idCard and the idComment to add
     * @returns {any} The updated card
     */
    addCommentCard(data) { //data = idCard, idComment
        const card = Card.findOne(data.idCard)
        const comments = card.comments
        comments.push(data.idComment)
        Card.update( {_id: data.idCard}, {$set: {comments: comments}})
        return Card.findOne({_id: data.idCard})
    },
    /**
     * Delete a comment from the card
     * @param data The data necessary for the update, it contains the idCard and the idComment to delete
     * @returns {any} The updated card
     */
    deleteCommentCard(data) { //data = idCard, idComment
        const card = Card.findOne(data.idCard)
        const comments = card.comments
        const position = comments.indexOf(data.idComment)
        comments.splice(position, 1)
        Card.update( {_id: data.idCard}, {$set: {comments: comments}})
        return Card.findOne({_id: data.idCard})
    },
    /**
     * Assert the card is billable
     * @param idCard The id of the card
     * @returns {billable|{type, defaultValue}|boolean|*} true if the card is billable else false
     */
    isBillableCard(idCard) {
        const card = Card.findOne({_id: idCard})
        return card.billable
    },
    /**
     * Add a checklist to the card
     * @param data The necessary data for the update, it contains _id the id of the card and the id of the checklist
     * @returns 1 if the update succeeded else 0
     */
    addCheckListCard(data){
        const card = Card.findOne(data._id)
        const check = card.checkList
        check.push(data.checkList)
        return Card.update({_id: data._id}, {$set: {checkList: check}})
    }
});

export default Card;