import {Meteor} from 'meteor/meteor';
import Card from './model';
import SimpleSchema from "simpl-schema";
import List from "../List/model";

Meteor.methods({
    getCard(id) {
        return Card.findOne(id);
    },
    getCards() {
        return Card.find().fetch();
    },
    addCard(data) {
        return Card.insert(data);
    },
   removeCard(id){
        return Card.remove({_id: id});
    },
    findOneCard(id) {
        return Card.findOne(id);
    },
    updateCard(data) {
        return Card.update({_id: data._id}, {$set: {titleCard: data.titleCard, descriptionCard: data.descriptionCard, deadlineCard: data.deadlineCard, positionCard: data.positionCard,
                seedCard: data.seedCard, isDeletedCard: data.isDeletedCard, isArchivedCard: data.isArchivedCard, billable: data.billable, assignedUsers: data.assignedUsers}})
    },
    updateCardTitle(data) {
        Card.update(
            {_id: data._id},
            {$set: {titleCard: data.titleCard}})
        return Card.findOne({_id: data._id})
    },
    updateCardDescription(data) {
        Card.update(
            {_id: data._id},
            {$set: {descriptionCard: data.descriptionCard}})
        return Card.findOne({_id: data._id})
    },
    updateCardBillable(data) {
        Card.update(
            {_id: data._id},
            {$set: {billable: data.billable}})
        return Card.findOne({_id: data._id})
    },
    updateCardPosition(data) { // data = idCard, position
        return Card.update( {_id: data.idCard}, {$set: {positionCard: data.position}})
    },
    addContributorCard(data) { //data = idCard, idMember
        const card = Card.findOne(data.idCard)
        const members = card.assignedUsers
        members.push(data.idMember)
        Card.update( {_id: data.idCard}, {$set: {assignedUsers: members}})
        return Card.findOne({_id: data.idCard})
    },
    deleteContributorCard(data) { //data = idCard, idMember
        const card = Card.findOne(data.idCard)
        const members = card.assignedUsers
        const position = members.indexOf(data.idMember)
        members.splice(position, 1)
        Card.update( {_id: data.idCard}, {$set: {assignedUsers: members}})
        return Card.findOne({_id: data.idCard})
    },
    addLabelCard(data) { //data = idCard, idLabel
        const card = Card.findOne(data.idCard)
        const labels = card.labels
        labels.push(data.idLabel)
        Card.update( {_id: data.idCard}, {$set: {labels: labels}})
        return Card.findOne({_id: data.idCard})
    },
    deleteLabelCard(data) { //data = idCard, idLabel
        const card = Card.findOne(data.idCard)
        const labels = card.labels
        const position = labels.indexOf(data.idLabel)
        labels.splice(position, 1)
        Card.update( {_id: data.idCard}, {$set: {labels: labels}})
        return Card.findOne({_id: data.idCard})
    }
});

export default Card;