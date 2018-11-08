export const GET_CARD = 'GET_CARD';
export const ADD_CARD = 'ADD_CARD';

export function getCard(_id) {
    return {
        type: GET_CARD,
        _id,
    };
}

export function addCard(data){
    console.log("helo");
    return{
        type: ADD_CARD,
        data,
    }
}