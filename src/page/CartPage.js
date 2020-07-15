import React, { Component, Fragment } from 'react'
import TopNavigation from '../component/topContent/TopNavigation'
import Footer from '../component/bottomContent/Footer';
import CartItems from '../component/cart/CartItems';

export default class CartPage extends Component {
    render() {
        return (
            <Fragment>
            <TopNavigation />
            <br/><br/><br/><br/>
            <CartItems/>
            <Footer/>
        </Fragment>
        )
    }
}
