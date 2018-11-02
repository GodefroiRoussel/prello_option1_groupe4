import {Meteor} from 'meteor/meteor';

const Team = new Meteor.Collection('team');

Meteor.publish('team', function() {
    return Team.find();
})

export default Team;