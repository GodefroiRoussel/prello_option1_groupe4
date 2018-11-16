import {Meteor} from 'meteor/meteor';
import Work from './model';

Meteor.methods({
    addWork(data){
        console.log('serveur work add', data)
        return Work.insert({idCard: data._id, idUser: Meteor.userId(), day: data.dateWork, timeReal: data.timeWork});
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