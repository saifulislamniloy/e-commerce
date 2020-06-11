import React, { Component, Fragment } from 'react'
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap'
import { NavLink } from "react-router-dom";

export default class TopNavigation extends Component {
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
                                <NavLink exact activeStyle={{ color: '#002C42' }} className="sideMenuTitle" to="/">Menu Button  </NavLink>
                                <NavLink exact activeStyle={{ color: '#002C42' }} className="sideMenuTitle" to="/profile">Menu Button  </NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </Fragment>
        )
    }
}