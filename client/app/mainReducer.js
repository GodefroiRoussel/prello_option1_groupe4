import { combineReducers } from 'redux';
import user from './objects/Login/LoginReducers';
import todos from './objects/Todo/TodoReducers';
//import lists from './objects/List/ListReducers';
import teams from './objects/Team/TeamReducers';
import boards from './objects/Board/BoardReducers';

const mainReducer = combineReducers({
  todos,
  user,
  //lists,
  teams,
  boards,
});

export default mainReducer;
