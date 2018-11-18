import {Meteor} from 'meteor/meteor';
import Work from './model';

Meteor.methods({ //Meteor.userId()
    addWork(data){
        return Work.insert({idCard: data._id, idUser: this.userId, day: data.dateWork, timeReal: data.timeWork, idBoard: data.boardId});
    },
    getWorksByCard(data) {
        console.log(data)
        console.log(Work.find({idCard: data.idCard}).fetch())
        return Work.find({idCard: data.idCard}).fetch();
    },
    getWorkBillableByBoard(data) {
        const works = Work.find({idBoard: data.idBoard, day: {$gte: new Date(data.startDate), $lt: new Date(data.endDate)}}).fetch()
        console.log(data.idBoard)
        var worksBill = []
        works.map(work => {
            const billCard = Meteor.call('isBillableCard', work.idCard)
            if(billCard === true) {
                worksBill.push(work)
            }
        })
        return worksBill
    },
    getWorkNotBillableByBoard(data) {
        const works = Work.find({idBoard: data.idBoard, day: {$gte: new Date(data.startDate), $lt: new Date(data.endDate)}}).fetch()
        var worksNotBill = []
        works.map(work => {
            const billCard = Meteor.call('isBillableCard', work.idCard)
            if(billCard === false) {
                worksNotBill.push(work)
            }
        })
        return worksNotBill
    },
    removeWork(idWork) {
        return Work.remove({_id: idWork})
    }

})