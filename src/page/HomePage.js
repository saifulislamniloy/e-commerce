import React, { Component, Fragment } from 'react'
import TopNavigation from '../component/topContent/TopNavigation'
import Category from '../component/category/Category'
import Footer from '../component/bottomContent/Footer'

export default class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation />
                <br/><br/><br/><br/>
                <Category />
                <Footer/>
            </Fragment>
        )
    }
}
