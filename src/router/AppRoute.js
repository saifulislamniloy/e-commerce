import React, { Component, Fragment } from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from '../page/HomePage';
import ProductListPage from '../page/ProductListPage';
import ProductDetailsPage from '../page/ProductDetailsPage';

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/products/:id" component={ProductListPage} />
                    <Route exact path="/product-detail/:id" component={ProductDetailsPage} />
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;