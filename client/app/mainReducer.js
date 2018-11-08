import { combineReducers } from 'redux';
import user from './objects/Login/LoginReducers';
import todos from './objects/Todo/TodoReducers';
import lists from './objects/List/ListReducers';
import teams from './objects/Team/TeamReducers';
import boards from './objects/Board/BoardReducers';
import cards from './objects/Card/CardReducers';
//import addlists from './objects/Board/AddListReducer';

const mainReducer = combineReducers({
  todos,
  user,
  lists,
  cards,
  //addlists,
  teams,
  boards,
});

export default mainReducer;
