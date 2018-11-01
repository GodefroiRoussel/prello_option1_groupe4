import {Meteor} from 'meteor/meteor';
import Team from './publications';

Meteor.methods({
    addTeam(name){
        return Team.insert({name: name});
    },
    getTeams() {
        return Team.find().fetch();
    },
})