import React, { Component, Fragment } from 'react'
import '../../asset/css/custom.scss';
import '../../asset/css/bootstrap.min.css';
import { Container, Navbar, Nav, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import LanguageMode from '../../localStorage/LanguageMode';

export default class TopNavigation extends Component {
    setLanguageMode(mode){
        LanguageMode.setMode(mode)
    }
    render() {
        return (
            <Fragment>
                <Container>
                    <Navbar fixed="top" bg="light" variant="light" collapseOnSelect expand="lg">
                        <Navbar.Brand className="title" href="/" ><img src="https://www.elegantthemes.com/blog/wp-content/uploads/2019/05/featued-headless-ecommerce.jpg" height="32" width="32" alt="Smiley face" />  E-commerce</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="mr-auto">
                            </Nav>
                            <Nav >
                                <NavLink exact activeStyle={{ color: '#002C42' }} className="sideMenuTitle" to="/"> </NavLink>
                                <NavLink exact activeStyle={{ color: '#002C42' }} className="sideMenuTitle" to="/profile"></NavLink>
                            </Nav>
                            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                <ToggleButton onClick={()=> this.setLanguageMode("1")} value={1}>বাংলা</ToggleButton>
                                <ToggleButton onClick={()=> this.setLanguageMode("0")} value={2}>English</ToggleButton>
                            </ToggleButtonGroup>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </Fragment>
        )
    }
}
