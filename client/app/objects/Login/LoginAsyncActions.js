import asteroid from '../../common/asteroid';
import { setLoggedUser } from './LoginActions';

export function callLoginPolytech(data) {
    const user = {
        username: data.username,
        password: data.password
    };

    return dispatch => asteroid.call('loginPolytech', user)
        .then(data => {
            const token = data.token;
            const id = data.id;
            localStorage.setItem('ws://localhost:9000/websocket__login_token__', token);
            asteroid.call('getUser', id).then(userDB => {
                dispatch(setLoggedUser(userDB))
            })
        });
}
