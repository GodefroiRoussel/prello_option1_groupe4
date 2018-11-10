import { OPEN_MODAL, CLOSE_MODAL } from './ModalActions';

const initialState = {
    modals: [],
}

const modal = (state = initialState, action)=> {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                modals: state.modals.concat(action.obj)
            };
        case CLOSE_MODAL:
            return {
                ...state,
                modals: state.modals.filter(item => item.id !== action.obj.id),
            };
        default:
            return state;
    }
};

export default modal;