import asteroid from '../../common/asteroid';
import {addOtherWork} from './OtherWorkActions';

export function callAddOtherWork(data) {
    return dispatch => asteroid.call('addOtherWork', data)
        .then(result => {
            dispatch(addOtherWork(result))
        });
}

export function callGetOtherWorksBillable(data) {
    return dispatch => asteroid.call('getOtherWorkBillableByBoard', data)
}
export function callGetOtherWorksNotBillable(data) {
    return dispatch => asteroid.call('getOtherWorkNotBillableByBoard', data)
}
