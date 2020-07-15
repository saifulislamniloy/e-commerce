import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import Cart from '../../cart/Cart'

export default class CartItems extends Component {
    constructor() {
        super();
        this.state = {
            cartView: ""
        }
    }
    componentDidMount() {
        let arr = Cart.loadCart();
        if (arr.length > 0) {
            const view = arr.map(arr => {
                return (<Col sm={12} md={12} lg={12} className="p-2">
                    <div>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col lg={2} md={2} sm={2}>
                                        <img src={""+arr.img} alt="Girl in a jacket" width="80" height="80"/>
                                    </Col>
                                    <Col lg={4} md={4} sm={4}>
                                        <Card.Title className="title text-center">{arr.title}</Card.Title>
                                    </Col>
                                    <Col lg={4} md={4} sm={4}>
                                        <Card.Title className="title text-center">{arr.price}</Card.Title>
                                    </Col>
                                    <Col lg={2} md={2} sm={2}>
                                        <Button onClick={() => this.remove(arr.id)} variant="primary">Remove</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>)
            })
            this.setState({ cartView: view })
        }
    }

    remove(x) {
        let data = { id: x }
        Cart.removeOne(data)
    }
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        {this.state.cartView}
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
