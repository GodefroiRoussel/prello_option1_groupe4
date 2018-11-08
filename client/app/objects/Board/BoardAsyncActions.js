import asteroid from '../../common/asteroid';
import { getBoard, addBoard } from './BoardActions';

export function callGetBoard(idBoard) {
    console.log('hey ' + idBoard);
    return dispatch => asteroid.call('getBoard', idBoard)
        .then(result => dispatch(getBoard(result)));
}

export function callAddBoard(data) {
    console.log(data)
    let finaldata = {...data, ...{admins:[data.user], members:[data.user]}};
    if(data.team){
        finaldata = {...data, ...{teams:[data.team], admins:[data.user], members:[data.user]}}
        console.log(finaldata);
    }
    return dispatch => asteroid.call('addBoard', finaldata)
        .then(result => dispatch(addBoard({ ...{_id: result}, ...finaldata})));
}
