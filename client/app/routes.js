import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from './containers/Main/Main';
import Home from './containers/Home/Home';
import Registration from "./containers/Registration/Registration";
import Login from "./containers/Login/Login";
import LoginPolytech from "./containers/Login/LoginPolytech";
import Board from "./containers/Board/Board";
import Team from './containers/Team/Team';
import BoardParameters from './containers/BoardParameters/BoardParameters';
import Account from './containers/Account/Account';
import List from './containers/List/List';
import CardModal from './containers/CardModal/CardModal';
import War from './containers/WeeklyActivityReport/WAR';
import AdminMembers from "./containers/AdminMembers/AdminMembers";
import Client from './containers/Client/Client';
import ClientManagement from './containers/ClientManagement/ClientManagement';
import ClientRegistration from './containers/Client/ClientRegistration';
import BoardWar from './containers/WeeklyActivityReport/BoardWAR';


const Root = (
    <Route path="/" component={Main}>
        <IndexRoute component={Home} />
        <Route path="team" component={Team} />
        <Route path="login" component={Login} />
        <Route path="registration" component={Registration} />
        <Route path="account" component={Account} />
        <Route path="board" component={Board} />
        <Route path="list" component={List} />
        <Route path="test" component={BoardParameters} />
        <Route path="card" component={CardModal} />
        <Route path="war" component={War} />
        <Route path="oauth/clients" component={Client} />
        <Route path="oauth/clients/registration" component={ClientRegistration} />
        <Route path="oauth/clients/:id" component={ClientManagement} />

        <Route path="login/polytech" component={LoginPolytech} />
        <Route path = "admin-members" component={AdminMembers}/>
        <Route path = "boardWar" component={BoardWar}/>
    </Route>


)


export default Root