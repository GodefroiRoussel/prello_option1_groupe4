import asteroid from '../../common/asteroid';
import {addBoard} from "./CreateBoardAction";

export function callEditBoard(message) {
    console.log("hello");
    return dispatch => asteroid.call('addBoard', message)
        .then(result => dispatch(addBoard({ _id: result, message })));
}