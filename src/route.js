import React ,{Fragment} from 'react';
import {BrowserRouter as Routers, Route, Switch}  from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store'
import App from './App'
import Home from './pages/home/home.jsx';
import Regist from './pages/register/register.jsx'
import Login from './pages/login/login.jsx';
import Main from './pages/mainContainer/mainContainer.jsx'
import DaliyRecom from './pages/daliyRecom/daliyRecom.jsx'
import Player from './pages/player/player.jsx'
// import HocPrivateRoute from './pages/demo/index.jsx';
// const  PrivateRoute =  HocPrivateRoute(Route);
class Routes extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return  (
        <Provider store={store}>
            <Fragment>
                <Routers>
                    <App>
                        <Switch>
                            <Route exact path='/' component={Main}></Route>
                            <Route exact path='/recommend' component={DaliyRecom}></Route>
                            <Route exact path='/player' component={Player}></Route>
                            <Route path = '/login' component={Login}></Route>
                            <Route path = '/regist' component={Regist}></Route>
                        </Switch>                      
                        {/* <Switch>
                            <Route {...props} path="/login" component={Login} />
                            <Route {...props} path="/regist" component={Regist} />
                            <PrivateRoute  path="/home"  component={Home} />
                            <Route  {...props}  component={Login} />
                        </Switch> */}
                    </App>
                </Routers>
            </Fragment>
        </Provider>)
    }
}

export default Routes;