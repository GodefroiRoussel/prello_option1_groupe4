import { combineReducers } from 'redux';
import user from './objects/Login/LoginReducers';
import users from './objects/User/UserReducers'
import lists from './objects/List/ListReducers';
import teams from './objects/Team/TeamReducers';
import boards from './objects/Board/BoardReducers';
import cards from './objects/Card/CardReducers';
import clients from './objects/Client/ClientReducers';
import checklists from './objects/CheckList/CheckListReducers';
import items from './objects/Item/ItemReducers';
import works from './objects/WeeklyReport/WorkReducers';
import otherworks from './objects/OtherWork/OtherWorkReducers';
import labels from './objects/Label/LabelReducers';
//import addlists from './objects/Board/AddListReducer';

const mainReducer = combineReducers({
  user,
  lists,
  cards,
  teams,
  boards,
  clients,
  users,
  checklists,
  items,
  works,
  otherworks
  labels
});

export default mainReducer;
