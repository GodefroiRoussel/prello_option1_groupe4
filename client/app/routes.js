import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import CreateBoard from "./components/CreateBoard/CreateBoard";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import Team from './components/Team/Team';


const Root = (
    <Route path="/" component={Main}>
        <IndexRoute component={Home} />
        <Route path="team" component={Team}/>
        <Route path="login" component={Login}/>
        <Route path="registration" component={Registration}/>
        <Route path = "createBoard" component={CreateBoard}/>
    </Route>


)


export default Root