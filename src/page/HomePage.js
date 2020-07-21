import React, { Component, Fragment } from 'react'
import { ToggleButton, ToggleButtonGroup, Container } from 'react-bootstrap'
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

    setLanguageMode(mode) {
        LanguageMode.setMode(mode)
        this.setState({ languageMode: mode })
    }


    render() {
        return (
            <Fragment>
                <ToggleButtonGroup className="m-5" type="radio" name="options" defaultValue={parseInt(this.state.languageMode)}>
                    <ToggleButton variant="outline-success" onClick={() => this.setLanguageMode("1")} value={1}>বাংলা</ToggleButton>
                    <ToggleButton variant="outline-success" onClick={() => this.setLanguageMode("0")} value={0}>English</ToggleButton>
                </ToggleButtonGroup>
                <TopNavigation />
                <TopBanner languageMode={this.state.languageMode} />
                <Category languageMode={this.state.languageMode} />
                <Footer languageMode={this.state.languageMode} />
            </Fragment>
        )
    }
}
