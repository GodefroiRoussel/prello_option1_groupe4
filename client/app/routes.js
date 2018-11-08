import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from './containers/Main/Main';
import Home from './containers/Home/Home';
import CreateBoard from "./containers/CreateBoard/CreateBoard";
import Registration from "./containers/Registration/Registration";
import Login from "./containers/Login/Login";
import Board from "./containers/Board/Board";
import Team from './containers/Team/Team';
import BoardParameters from './components/BoardParameters/BoardParameters';
import Account from './containers/Account/Account';
import List from './containers/List/List';
import CardModal from './containers/CardModal/CardModal';
import War from './containers/WeeklyActivityReport/WAR';


const Root = (
    <Route path="/" component={Main}>
        <IndexRoute component={Home} />
        <Route path="team" component={Team}/>
        <Route path="login" component={Login}/>
        <Route path="registration" component={Registration}/>
        <Route path="account" component={Account}/>
        <Route path = "createBoard" component={CreateBoard}/>
        <Route path = "board" component={Board}/>
        <Route path = "list" component={List}/>
        <Route path = "test" component={BoardParameters}/>
        <Route path = "card" component={CardModal}/>
        <Route path = "war" component={War}/>
    </Route>


)


export default Root