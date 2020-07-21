import React, { Component, Fragment } from 'react'
import TopNavigation from '../component/topContent/TopNavigation'
import Footer from '../component/bottomContent/Footer';
import CartItems from '../component/cart/CartItems';
import LanguageMode from '../localStorage/LanguageMode';

export default class CartPage extends Component {
    constructor() {
        super();
        this.state = {
            languageMode: LanguageMode.loadMode()
        }
    }

    callbackFunction = (childData) => {
        this.setState({ languageMode: childData })
    }

    render() {
        return (
            <Fragment>
            <TopNavigation  parentCallback = {this.callbackFunction}/>
            <br/><br/><br/><br/>
            <CartItems languageMode={this.state.languageMode} />
            <Footer languageMode={this.state.languageMode} />
        </Fragment>
        )
    }
}
