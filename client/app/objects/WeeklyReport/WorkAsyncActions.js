import asteroid from '../../common/asteroid';
import {editWorkBillable, editWorkNotBillable} from './WorkActions'

export function callGetBillableWorks(data) { //data = idBoard, startDate, endDate
    return dispatch => asteroid.call('getWorkBillableByBoard')
        .then(result => dispatch(editWorkBillable(result)));
}

export function callGetNotBillableWorks(data) { //data = idBoard, startDate, endDate
    return dispatch => asteroid.call('getWorkNotBillableByBoard')
        .then(result => dispatch(editWorkBillable(result)));
}