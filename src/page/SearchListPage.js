import React, { Component, Fragment } from 'react'
import TopNavigation from '../component/topContent/TopNavigation'
import Footer from '../component/bottomContent/Footer';
import SearchList from '../component/product/SearchList';

export default class SearchListPage extends Component {
    constructor({match}){
        super();
        this.state={
            id:match.params.id
        }
    }
    render() {
        return (
            <Fragment>
                <TopNavigation />
                <br /><br /><br /><br />
                <SearchList id={this.state.id}/>
                <Footer/>
            </Fragment>
        )
    }
}
