import React from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from '../pages/HomePage/homepage';
import Catalog from './Catalog/catalog';
import Product from './Products/product';
import Cart from './Cart/cart';
function Main() {
    return (

        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/product" component={Product} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path={["/category/:slug?", "/department/:slug?"]} component={Catalog} />
        </Switch>
    );

}
export default Main;