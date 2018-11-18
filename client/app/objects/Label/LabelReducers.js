import { ADD_LABEL, UPDATE_COLOR_LABEL, EDIT_LABEL, UPDATE_TITLE_LABEL} from './LabelActions';
import { add, edit, update, remove } from '../../common/helpers';

const labels = (state = [], action) => {
  switch (action.type) {
    case ADD_LABEL:
      return add(state, action);
    case UPDATE_COLOR_LABEL:
      return update(state, action, "colorLabel")
    case EDIT_LABEL:
      return edit(state, action)
    case UPDATE_TITLE_LABEL:
      return update(state, action, "titleLabel")
    default:
      return state;
  }
};

export default labels;