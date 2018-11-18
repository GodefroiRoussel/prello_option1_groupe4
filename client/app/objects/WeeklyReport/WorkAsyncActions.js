import asteroid from '../../common/asteroid';
import {addWork, editWorkBillable, editWorkNotBillable} from './WorkActions'

export function callGetBillableWorks(data) { //data = idBoard, startDate, endDate
    return dispatch => asteroid.call('getWorkBillableByBoard', data)
        /*.then(result => {
            console.log('res', result)
            return result
        });*/
}

export function callGetNotBillableWorks(data) { //data = idBoard, startDate, endDate
    return dispatch => asteroid.call('getWorkNotBillableByBoard', data)
           /* dispatch(editWorkBillable(result))*/

}

export function callAddWork(data) { //data = _id, dateWork, timeWork, boardId,
    console.log('async', data)
    return dispatch => asteroid.call('addWork', data)
        .then(result => {
            dispatch(addWork(result))
        })
}