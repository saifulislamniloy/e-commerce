import React, { Component, Fragment } from 'react'
import TopNavigation from '../component/topContent/TopNavigation'
import ProductList from '../component/product/ProductList'
import Footer from '../component/bottomContent/Footer';

export default class ProductListPage extends Component {
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
                <ProductList id={this.state.id}/>
                <Footer/>
            </Fragment>
        )
    }
}
