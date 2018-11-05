import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import CreateBoard from "./components/CreateBoard/CreateBoard";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import Board from "./components/Board/Board";
import Team from './components/Team/Team';
import Account from './components/Account/Account';
import List from './components/List/List';


const Root = (
    <Route path="/" component={Main}>
        <IndexRoute component={Home} />
        <Route path="team" component={Team}/>
        <Route path="login" component={Login}/>
        <Route path="registration" component={Registration}/>
        <Route path="account" component={Account}/>
        <Route path = "createBoard" component={CreateBoard}/>
        <Route path = "board/:idBoard" component={Board}/>
        <Route path = "list" component={List}/>
    </Route>


)


export default Root