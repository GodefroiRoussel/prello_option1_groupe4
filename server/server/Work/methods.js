import {Meteor} from 'meteor/meteor';
import Work from './model';

Meteor.methods({
    addWork(data){
        console.log('serveur work add', data)
        return Work.insert({idCard: data._id, idUser: Meteor.userId(), day: data.dateWork, timeReal: data.timeWork, idBoard: data.boardId});
    },
    getWorkByCard() {
        return Work.find().fetch();
    },
    getWorkBillableByBoard(data) {
        console.log('work bill', data)
        const work = Work.findOne({_id: "2HLNE4Fc59GJyReDy"})
        console.log(new Date(data.startDate) < work.day)
        const works = Work.find({idBoard: data.idBoard, day: {$gte: new Date(data.startDate), $lt: new Date(data.endDate)}}).fetch()
        var worksBill = []
        works.map(work => {
            const billCard = Meteor.call('isBillableCard', work.idCard)
            if(billCard === false) {
                worksBill.push(work)
            }
        })
        console.log(worksBill)
        return worksBill
    },
    getWorkNotBillableByBoard(data) {
        console.log('work bill', data)
        const work = Work.findOne({_id: "2HLNE4Fc59GJyReDy"})
        console.log(new Date(data.startDate) < work.day)
        const works = Work.find({idBoard: data.idBoard, day: {$gte: new Date(data.startDate), $lt: new Date(data.endDate)}}).fetch()
        var worksBill = []
        works.map(work => {
            const billCard = Meteor.call('isBillableCard', work.idCard)
            if(billCard === false) {
                worksBill.push(work)
            }
        })
        console.log(worksBill)
        return worksBill
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