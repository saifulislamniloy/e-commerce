import React, { Component, Fragment } from 'react'
import TopNavigation from '../component/topContent/TopNavigation'
import Footer from '../component/bottomContent/Footer';
import SearchList from '../component/product/SearchList';
import LanguageMode from '../localStorage/LanguageMode';

export default class SearchListPage extends Component {
    constructor({match}){
        super();
        this.state={
            id:match.params.id,
            languageMode:LanguageMode.loadMode()
        }
    }

    callbackFunction = (childData) => {
        this.setState({ languageMode: childData })
    }

    render() {
        return (
            <Fragment>
                <TopNavigation parentCallback={this.callbackFunction}  languageMode={this.state.languageMode} />
                <br /><br /><br /><br />
                <SearchList id={this.state.id}  languageMode={this.state.languageMode} />
                <Footer  languageMode={this.state.languageMode} />
            </Fragment>
        )
    }
}
