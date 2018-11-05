export const HIDE_MODAL = 'HIDE_MODAL';
export const SHOW_MODAL = 'SHOW_MODAL';

export function showModal(modalProps, modalType){
    return {
        type: SHOW_MODAL,
        modalProps,
        modalType
    };
}

export function hideModal(){
    return {
        type: HIDE_MODAL,
    };
}