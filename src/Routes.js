import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom' //grab user id and stuff props provided by
import Signup from './user/Signup'
import Signin from './user/Signin'
import Home from './core/Home'
import PrivateRoute from './auth/PrivateRoute'
import AdminRoute  from './auth/AdminRoute'
import Dashboard from './user/UserDashboard'
import AdminDashboard from './user/AdminDashboard'
import AddCategory from "./admin/AddCategory";
import AddProduct from "./admin/AddProduct";
import Shop from "./core/Shop";
import Product from './core/Product'
import Cart from './core/Cart'


const Routes = () => {
    return (
        <BrowserRouter>
          
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/shop" exact component={Shop} />
                <Route path='/signup' exact component={Signup}></Route>
                <Route path='/signin' exact component={Signin}></Route>
                <PrivateRoute path='/user/dashboard' exact component={Dashboard}/>
                <AdminRoute  path='/admin/dashboard' exact component={AdminDashboard}/>
                <AdminRoute
                    path="/create/category"
                    exact
                    component={AddCategory}
                />
                 <AdminRoute
                    path="/create/product"
                    exact
                    component={AddProduct}
                />
                <Route path="/product/:productId" exact component={Product} />
                <Route path="/cart" exact component={Cart} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;