const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

export function openModal(obj) {
    return {
        type: OPEN_MODAL,
        obj,
    }
}
export function closeModal(obj){
    return {
        type: CLOSE_MODAL,
        obj,
    }
}