import React, { Component, Fragment } from 'react'
import LanguageMode from '../localStorage/LanguageMode';
import TopNavigation from '../component/topContent/TopNavigation'
import ProductList from '../component/product/ProductList'
import Footer from '../component/bottomContent/Footer';

export default class ProductListPage extends Component {
    constructor({ match }) {
        super();
        this.state = {
            id: match.params.id,
            languageMode: LanguageMode.loadMode()
        }
    }

    callbackFunction = (childData) => {
        this.setState({ languageMode: childData })
    }

    render() {
        return (
            <Fragment>
                <TopNavigation parentCallback={this.callbackFunction} />
                <br /><br /><br /><br />
                <ProductList id={this.state.id} languageMode={this.state.languageMode} />
                <Footer languageMode={this.state.languageMode} />
            </Fragment>
        )
    }
}
