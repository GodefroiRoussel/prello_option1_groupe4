import {Meteor} from 'meteor/meteor';
import Card from './model';

//TODO: take care of position card (change model too)
Meteor.methods({
    addCard(message) {
        console.log('ser');
        const card = {
            titleCard: message
        };
        return Card.insert(card);
    },
   removeCard(id){
        return Card.remove({_id: id});
    },
});

export default Card;