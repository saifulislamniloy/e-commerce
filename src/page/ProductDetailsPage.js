import React, { Component, Fragment } from 'react'
import TopNavigation from '../component/topContent/TopNavigation'
import ProductDetails from '../component/product/ProductDetails';

export default class ProductDetailsPage extends Component {
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
                <br/><br/><br/><br/>
                <ProductDetails id={this.state.id}/>
            </Fragment>
        )
    }
}
