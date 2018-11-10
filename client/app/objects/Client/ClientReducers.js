import { ADD_CLIENT, GET_ALL_CLIENT } from './ClientActions';
import { add } from '../../common/helpers';

const clients = (state = [], action) => {
    switch (action.type) {
        case ADD_CLIENT:
            return add(state, action);

        case GET_ALL_CLIENT:
            return action.data;

        default:
            return state;
    }
};

export default clients;