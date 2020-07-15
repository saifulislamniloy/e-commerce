import React, { Component, Fragment } from 'react'
import '../../asset/css/custom.scss';
import '../../asset/css/bootstrap.min.css';
import { Container, Navbar, Nav, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import { NavLink, Redirect } from "react-router-dom";
import LanguageMode from '../../localStorage/LanguageMode';
import TopNavigationItems from '../../language/TopNavigationItems';
import cart from "../../asset/icon/carts.png"

export default class TopNavigation extends Component {
    constructor() {
        super();
        this.state = {
            languageMode: LanguageMode.loadMode(),
            reload: false
        }
    }

    setLanguageMode(mode) {
        LanguageMode.setMode(mode)
        this.setState({ reload: true, languageMode: mode })
    }

    reload = () => {
        if (this.state.reload === true)
            return <Redirect to="/" />
    }

    render() {
        return (
            <Fragment>
                {this.reload()}
                <Container className="topNavigation">
                    <Navbar fixed="top" bg="light" variant="light" collapseOnSelect expand="lg">
                        <Navbar.Brand  href="/" ><img src="https://www.elegantthemes.com/blog/wp-content/uploads/2019/05/featued-headless-ecommerce.jpg" height="32" width="32" alt="Smiley face" />{TopNavigationItems.getHeader(parseInt(this.state.languageMode))}</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="mr-auto">
                            </Nav>
                            <Nav >
                                <NavLink exact activeStyle={{ color: '#002C42' }} className="custom-padding" to="/cart"><img src={cart} height="32" width="32" alt="Smiley face" /></NavLink>
                                <NavLink exact activeStyle={{ color: '#002C42' }} className="sideMenuTitle" to="/profile"></NavLink>
                            </Nav>
                            <ToggleButtonGroup type="radio" name="options" defaultValue={parseInt(this.state.languageMode)}>
                                <ToggleButton variant="outline-success" onClick={() => this.setLanguageMode("1")} value={1}>বাংলা</ToggleButton>
                                <ToggleButton variant="outline-success" onClick={() => this.setLanguageMode("0")} value={0}>English</ToggleButton>
                            </ToggleButtonGroup>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </Fragment>
        )
    }
}
