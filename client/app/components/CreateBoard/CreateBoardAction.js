//import {ADD_BOARD} from "../CreateBoardAction";

export const ADD_BOARD = 'ADD_BOARD';

export function addBoard(data) {
    return {
        type: ADD_BOARD,
        data,
    };
}