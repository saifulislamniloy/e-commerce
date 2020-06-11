import React, { Component, Fragment } from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from '../page/HomePage';
import ProductListPage from '../page/ProductListPage';

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/products/:id" component={ProductListPage} />
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;