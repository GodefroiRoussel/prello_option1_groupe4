import { combineReducers } from 'redux';
import user from './containers/Login/LoginReducers';
import todos from './containers/Todo/TodoReducers';
import lists from './containers/List/ListReducers';
import teams from './containers/Team/TeamReducers';
import modal from './containers/Team/ModalTeam/ModalReducers';
import boards from './containers/Board/BoardReducers';

const mainReducer = combineReducers({
  todos,
  user,
  lists,
  teams,
  modal,
  boards,
});

export default mainReducer;
