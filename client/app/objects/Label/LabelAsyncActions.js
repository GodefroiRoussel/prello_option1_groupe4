import asteroid from '../../common/asteroid';
import {addLabel, updateColorLabel} from './LabelActions';
import {callUpdateLabelBoard} from '../../objects/Board/BoardAsyncActions'

export function callAddLabel(data) {
  return dispatch => asteroid.call('addLabel')
      .then(result => {
        const newLabel = {_id: result, titleLabel: "Label Sticker", colorLabel: [255, 4, 4]};
        dispatch(callUpdateLabelBoard({_id: data._id, idLabel: result}))
        return dispatch(addLabel(newLabel))
      });
}

export function callUpdateColorLabel(data){
  return dispatch => asteroid.call('updateColorLabel', data)
    .then(result => dispatch(updateColorLabel(data)))
}
