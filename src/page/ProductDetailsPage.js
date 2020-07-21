import React, { Component, Fragment } from 'react'
import TopNavigation from '../component/topContent/TopNavigation'
import ProductDetails from '../component/product/ProductDetails';
import Footer from '../component/bottomContent/Footer';
import Comment from '../component/comment/Comment';
import LanguageMode from '../localStorage/LanguageMode';

export default class ProductDetailsPage extends Component {
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
                <ProductDetails id={this.state.id} languageMode={this.state.languageMode}/>
                <Comment languageMode={this.state.languageMode} />
                <Footer languageMode={this.state.languageMode} />
            </Fragment>
        )
    }
}
