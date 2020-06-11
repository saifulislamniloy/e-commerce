import React, { Component, Fragment } from 'react'
import TopNavigation from '../component/topContent/TopNavigation'
import Category from '../component/category/Category'

export default class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation />
                <br/><br/><br/><br/>
                <Category />
            </Fragment>
        )
    }
}
