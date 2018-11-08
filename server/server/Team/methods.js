import {Meteor} from 'meteor/meteor';
import Team from './model';

Meteor.methods({
    addTeam(team){
        return Team.insert(team);
    },
    getTeams() {
        return Team.find().fetch();
    },
    getTeamById(){
        return Team.findOne(id);
    },
    getTeamByIdUser(id){
        return Team.find(id).fetch();
    },
    removeTeam(id){
        return Team.remove(id);
    },
    addMemberTeam(id, members) {
        return Team.update({_id: id}, {$set: {members: members}});
    },

})