import asteroid from '../../common/asteroid';
import { setLoggedUser } from './LoginActions';

export function callLoginPolytech(data) {
    const user = {
        username: data.username,
        password: data.password
    };

    return dispatch => asteroid.call('loginPolytech', user)
        .then(id => {
            asteroid.call('getUser', id).then(userDB => {
                dispatch(setLoggedUser(userDB))
            })
        });
}
