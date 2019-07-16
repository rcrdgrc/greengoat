import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom' //grab user id and stuff props provided by
import Signup from './user/Signup'
import Signin from './user/Signin'
import Home from './core/Home'


const Routes = () => {
    return (
        <BrowserRouter>
          
            <Switch>
                <Route path='/signup' exact component={Signup}></Route>
                <Route path='/signin' exact component={Signin}></Route>
                <Route path='/' exact component={Home}></Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;