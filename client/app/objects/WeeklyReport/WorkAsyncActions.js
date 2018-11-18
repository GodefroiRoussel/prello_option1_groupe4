import asteroid from '../../common/asteroid';
import {addWork, editWorkBillable, editWorkNotBillable, getWorksByCard} from './WorkActions'

export function callGetBillableWorks(data) { //data = idBoard, startDate, endDate
    return dispatch => asteroid.call('getWorkBillableByBoard', data)
}

export function callGetNotBillableWorks(data) { //data = idBoard, startDate, endDate
    return dispatch => asteroid.call('getWorkNotBillableByBoard', data)
}

export function callAddWork(data) { //data = _id, dateWork, timeWork, boardId,
    return dispatch => asteroid.call('addWork', data)
        .then(result => {
            dispatch(addWork(result))
        })
}

export function callGetWorksByCard(data){
    console.log(data)
    return dispatch => asteroid.call('getWorksByCard', data)
        .then(result => {
            dispatch(getWorksByCard(result))
        })
}