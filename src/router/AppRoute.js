import React, { Component, Fragment } from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from '../page/HomePage';
import ProductListPage from '../page/ProductListPage';
import SearchListPage from '../page/SearchListPage';
import ProductDetailsPage from '../page/ProductDetailsPage';
import CartPage from '../page/CartPage';
import PurchaseFormPage from '../page/PurchaseFormPage';

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/products/:id" component={ProductListPage} />
                    <Route exact path="/search/:id" component={SearchListPage} />
                    <Route exact path="/product-detail/:id" component={ProductDetailsPage} />
                    <Route exact path="/cart" component={CartPage} />
                    <Route exact path="/continue-purchase" component={PurchaseFormPage} />
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;