import React from 'react';
import {BrowserRouter as Router , HashRouter ,  Route,Link,Switch ,withRouter} from 'react-router-dom';
import {syncHistoryWithStore} from 'react-router-redux'
import reducer from '../reducers/index.js';
import Home from '../home/home.jsx';
import Login from '../login/login.jsx';
import Regist from '../register/register.jsx';
//import PrivateRoute from 'component/common/PrivateRoute.jsx';
import HocPrivateRoute from './index';
const  PrivateRoute =  HocPrivateRoute(Route);

<Switch>
<Route {...props} path="/login" component={Login} />
<Route {...props} path="/regist" component={Regist} />
<PrivateRoute  path="/home"  component={Home} />
<Route  {...props}  component={Login} />
</Switch>