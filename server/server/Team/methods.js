import {Meteor} from 'meteor/meteor';
import Team from './model';

Meteor.methods({
    addTeam(team){
        return Team.insert(team);
    },
    getTeams() {
        return Team.find().fetch();
    },
    getTeamById(id){
        return Team.findOne(id);
    },
    getTeamByIdUser(id){
        return Team.find(id).fetch();
    },
    removeTeam(id){
        return Team.remove(id);
    },
    addMemberTeam(data) {
        const users = Meteor.call("getAllUsersReturnUsername");
        if(users.includes(data.member)){
            var members = Meteor.call("getTeamById",data._id).members
            members.push(data.member)
            return Team.update({_id: data._id}, {$set: {members: members}});
        }
        else{
            return 0;
        }
    },
    updateVisibilityTeam(data){
        return Team.update({_id: data._id}, {$set: {visibilityTeam: data.visibilityTeam}});
    },
    deleteMemberTeam(data){
        var members = Meteor.call("getTeamById",data._id).members
        const membersFinal = members.filter(x => x != data.member)
        return Team.update({_id: data._id}, {$set: {members: membersFinal}});
    }

})