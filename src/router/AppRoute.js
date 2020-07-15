import React, { Component, Fragment } from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from '../page/HomePage';
import ProductListPage from '../page/ProductListPage';
import ProductDetailsPage from '../page/ProductDetailsPage';
import CartPage from '../page/CartPage';

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/products/:id" component={ProductListPage} />
                    <Route exact path="/product-detail/:id" component={ProductDetailsPage} />
                    <Route exact path="/cart" component={CartPage} />
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;