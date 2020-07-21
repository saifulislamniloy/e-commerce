import React, { Component, Fragment } from 'react'
import TopNavigation from '../component/topContent/TopNavigation'
import Category from '../component/category/Category'
import Footer from '../component/bottomContent/Footer'
import TopBanner from '../component/topContent/TopBanner'
import LanguageMode from '../localStorage/LanguageMode';

export default class HomePage extends Component {
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
                <TopNavigation parentCallback = {this.callbackFunction}/>
                <TopBanner languageMode={this.state.languageMode} />
                <Category languageMode={this.state.languageMode} />
                <Footer languageMode={this.state.languageMode} />
            </Fragment>
        )
    }
}
