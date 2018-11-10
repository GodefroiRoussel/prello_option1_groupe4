import asteroid from '../../common/asteroid';
import { addCard, getCard } from './CardActions';

export function callGetCard(idCard) {
    return dispatch => asteroid.call('getCard', idCard)
        .then(result => dispatch(getCard(result)));
}

export function callAddCard(data) {
    console.log("hello")
    return dispatch => asteroid.call('addCard', data)
        .then(result => dispatch(addCard({...data, ...{_id: result, isDeletedCard: false, isArchivedCard: false, billable: false}})));
}
