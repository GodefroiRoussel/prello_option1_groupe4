import {Meteor} from 'meteor/meteor';
import Card from './model';

//TODO: take care of position card (change model too)
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
});

export default Card;