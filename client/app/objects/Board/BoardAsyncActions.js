import asteroid from '../../common/asteroid';
import { getBoard } from './BoardActions';
import {addList} from "../Board/BoardActions";

export function callGetBoard(idBoard) {
    console.log('hey ' + idBoard);
    return dispatch => asteroid.call('getBoard', idBoard)
        .then(result => dispatch(getBoard(result)));
}
export function callAddList(message) {
    console.log('cdList', message);
    return dispatch => asteroid.call('addList', message)
        .then(result => dispatch(addList({ _id: result, message })))
};