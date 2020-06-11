import React, { Component, Fragment } from 'react'
import TopNavigation from '../component/topContent/TopNavigation'
import ProductList from '../component/product/ProductList'

export default class ProductListPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation />
                <br /><br /><br /><br />
                <ProductList />
            </Fragment>
        )
    }
}
