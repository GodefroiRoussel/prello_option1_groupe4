import asteroid from '../../common/asteroid';
import {addWork, editWorkBillable, editWorkNotBillable} from './WorkActions'

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