import { combineReducers } from 'redux';
import user from './components/Login/LoginReducers';
import todos from './components/Todo/TodoReducers';
import lists from './components/List/ListReducers';
import teams from './components/Team/TeamReducers';
import modal from './components/Team/ModalTeam/ModalReducers';

const mainReducer = combineReducers({
  todos,
  user,
  lists,
  teams,
  modal,
});

export default mainReducer;
