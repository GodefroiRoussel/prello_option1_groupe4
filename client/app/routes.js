import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";


const Root = (
    <Route path="/" component={Main}>
        <IndexRoute component={Home} />
        <Route path="login" component={Login}/>
        <Route path="registration" component={Registration}/>
    </Route>


)


export default Root