import { ADD_TODO, REMOVE_TODO, EDIT_TODO, GET_ALL_TODO } from './TodoActions';
import { remove, edit, add , update} from '../../common/helpers';

//les apels au serveur sont fait par astéroide grâce aux appel client de modification du state défini dans le reducer et les action / asyncAction
const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return add(state, action);
        case REMOVE_TODO:
            return remove(state, action);
        case EDIT_TODO:
            return update(state, action, "finished");
        case GET_ALL_TODO:
            return action.data;
        default:
            return state;
    }
};

export default todos;
