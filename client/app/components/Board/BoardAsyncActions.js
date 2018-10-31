import asteroid from '../../common/asteroid';
import { getBoard } from './BoardActions';

export function callGetBoard(idBoard) {
    console.log('hey ' + idBoard);
    return dispatch => asteroid.call('getBoard', idBoard)
        .then(result => dispatch(getBoard(result)));
}
