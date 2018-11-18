import {Meteor} from 'meteor/meteor';
import OtherWork from './model';
import Work from "../Work/model";

Meteor.methods({
    addOtherWork(data) {
        return OtherWork.insert({
            idUser: Meteor.userId(),
            otherWorkTitle: data.otherWorkTitle,
            dateOtherWork: data.dateOtherWork,
            nbHoursSpent: data.timeOtherWork,
            billable: data.billable
        });
    },
    getOtherWorkBillableByBoard(data) {
        const works = OtherWork.find({billable: true, dateOtherWork: {$gte: new Date(data.startDate), $lt: new Date(data.endDate)}}).fetch()
        var worksBill = []
        const members = Meteor.call('getMembersBoard', data.idBoard)
        works.map(work => {
            if(members.includes(work.idUser)) {
                worksBill.push(work)
            }
        })
        return worksBill
    },

    getOtherWorkNotBillableByBoard(data) {
        const works = OtherWork.find({billable: false, dateOtherWork: {$gte: new Date(data.startDate), $lt: new Date(data.endDate)}}).fetch()
        var worksNotBill = []
        const members = Meteor.call('getMembersBoard', data.idBoard)
        works.map(work => {
            if(members.includes(work.idUser)) {
                worksNotBill.push(work)
            }
        })
        return worksNotBill
    },
})