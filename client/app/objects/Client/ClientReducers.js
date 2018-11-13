import { ADD_CLIENT, GET_ALL_CLIENT, REMOVE_CLIENT, FAIL_REMOVE_CLIENT } from './ClientActions';
import { add, remove } from '../../common/helpers';

const clients = (state = [], action) => {
    switch (action.type) {
        case ADD_CLIENT:
            return add(state, action);

        case GET_ALL_CLIENT:
            return action.data;

        case REMOVE_CLIENT:
            return remove(state, action);

        case FAIL_REMOVE_CLIENT:
            return {
                ...state,
                error: action.error
            }

        default:
            return state;
    }
};

export default clients;