import React, { Component, Fragment } from 'react'
import { Container, Form, Button, Row, Col } from "react-bootstrap";

export default class TopBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topBanner m-0 p-0">
                    <Container fluid={true} className="banner ">
                        <Container>
                            <Row className="searchLayout">
                                <Col lg={8} md={8} sm={8}>
                                    <Form>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Control type="text" placeholder="Search by Product Name" />
                                        </Form.Group>
                                    </Form>
                                </Col>
                                <Col lg={4} md={4} sm={4}>
                                    <Button variant="primary" type="submit">
                                        Search
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </Container>
                </Container>
            </Fragment>
        )
    }
}
