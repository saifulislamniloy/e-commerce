import React, { Component, Fragment } from 'react'
import { Container, Row, Col} from 'react-bootstrap'

export default class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true}>
                <hr/>
                    <Row className="footer">
                       
                        <Col lg={4} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="header">Customer Service</h1>
                            <a className="link" href="/" target="_blank" rel="noopener noreferrer"> Contact Us</a><br />
                            <a className="link" href="/" target="_blank" rel="noopener noreferrer"> FAQ</a>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="header">About Site</h1>
                            <a className="link" href="/" target="_blank" rel="noopener noreferrer"> Privacy Policy</a><br />
                            <a className="link" href="/" target="_blank" rel="noopener noreferrer"> Terms of Use</a>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="header">For Business</h1>
                            <a className="link" href="/" target="_blank" rel="noopener noreferrer"> Corporate</a>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
