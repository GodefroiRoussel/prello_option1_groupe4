import {Meteor} from 'meteor/meteor';
import Work from './model';

Meteor.methods({
    addWork(team){
        return Work.insert(team);
    },
    getWorkByCard() {
        return Work.find().fetch();
    },
    getWorkBillableByBoard(data) {
        return Work.find({idBoard: data.idBoard})
    },
    getWorkNotBillableByBoard(idBoard) {
        return Work.find({idBoard: data.idBoard})
    },
    removeWork(idWork) {
        return Work.remove({_id: idWork})
    }
    /*
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
    },*/

})