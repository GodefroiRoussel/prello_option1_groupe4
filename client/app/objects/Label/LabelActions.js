
/*
 * action types
 */

export const ADD_LABEL = 'ADD_LABEL';
export const UPDATE_COLOR_LABEL='UPDATE_COLOR_LABEL';
export const EDIT_LABEL="EDIT_LABEL";



export function addLabel(data) {
    return {
      type: ADD_LABEL,
      data,
    };
  }

export function updateColorLabel(data){
  return {
    type: UPDATE_COLOR_LABEL,
    data
  };
}

export function editLabel(data){
  return{
    type: EDIT_LABEL,
    data
  };
}
