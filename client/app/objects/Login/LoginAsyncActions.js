import asteroid from '../../common/asteroid';
import { setLoggedUser } from './LoginActions';

const URL_WS = process.env.APIURL || "ws://localhost:9000/websocket";

export function callLoginPolytech(data) {
    const user = {
        username: data.username,
        password: data.password
    };

    return dispatch => asteroid.call('loginPolytech', user)
        .then(data => {
            const token = data.token;
            const id = data.id;
            localStorage.setItem(URL_WS + '__login_token__', token);
            asteroid.call('getUser', id).then(userDB => {
                dispatch(setLoggedUser(userDB))
            })
        });
}
