import { combineReducers } from 'redux';
import user from './components/Login/LoginReducers';
import todos from './components/Todo/TodoReducers';
import lists from './components/List/ListReducers';

const mainReducer = combineReducers({
  todos,
  user,
  lists,
});

export default mainReducer;
