import React, { Component, Fragment } from 'react'
import TopNavigation from '../component/topContent/TopNavigation'
import Footer from '../component/bottomContent/Footer';
import PurchaseForm from '../component/cart/PurchaseForm';
import LanguageMode from '../localStorage/LanguageMode';

export default class PurchaseFormPage extends Component {
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
                <TopNavigation parentCallback={this.callbackFunction} />
                <br /><br /><br /><br />
                <PurchaseForm/>
                <Footer languageMode={this.state.languageMode} />
            </Fragment>
        )
    }
}
