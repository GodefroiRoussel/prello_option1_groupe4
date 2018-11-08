import {ADD_CARD} from "../List/ListActions";

export const GET_BOARD = 'GET_BOARD';
export const ADD_LIST = 'ADD_LIST';

export function getBoard(_id) {
    return {
        type: GET_BOARD,
        _id,
    };
}

export function addList(data) {
    return {
        type: ADD_LIST,
        data,
    };
}
