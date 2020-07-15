import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Cart from '../../cart/Cart'

export default class CartItems extends Component {
    constructor() {
        super();
        this.state = {
            cartView: "",
            cartItems : []
        }
    }
    componentDidMount(){
        let arr = Cart.loadCart();
        this.setState({cartItems:arr})
        console.log(this.state.cartItems)
        console.log(arr)
        console.log(arr.length)
        if(arr.length > 0){
            const view = arr.map(arr => {
                return (<Col sm={12} md={6} lg={4} className="p-2">
                    <div>
                       <Card>
                            <Card.Body>
                                <Card.Title className="title text-center">{arr.id}</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>)
            })
            this.setState({ cartView: view })
        }
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
