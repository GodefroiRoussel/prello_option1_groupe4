import { ADD_USER, REMOVE_USER, EDIT_USER_PROFILE,EDIT_USER_PASSWORD, GET_ALL_USER } from './UserActions';
import { remove, edit, add } from '../../common/helpers';

//les apels au serveur sont fait par astéroide grâce aux appel client de modification du state défini dans le reducer et les action / asyncAction
const users = (state = [], action) => {
    switch (action.type) {
        case ADD_USER:
            return add(state, action);
        case REMOVE_USER:
            return remove(state, action);
        case EDIT_USER_PROFILE:
            return edit(state, action);
        case EDIT_USER_PASSWORD:
            return edit(state, action);
        case GET_ALL_USER:
            return action.payload;
        default:
            return state;
    }
};

export default users;
