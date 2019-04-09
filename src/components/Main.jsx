import React from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from '../pages/HomePage/homepage';
import Catalog from './Catalog/catalog';
import Product from './Products/product';
function Main() {
    return (

        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/product" component={Product} />
            <Route exact path={["/category/:slug?", "/department/:slug?"]} component={Catalog} />
        </Switch>
    );

}
export default Main;