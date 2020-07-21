import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import Cart from '../../cart/Cart'
import plus from '../../asset/icon/plus.png'
import minus from '../../asset/icon/minus.png'
import deleteImg from '../../asset/icon/delete.png'
import BanglaConverter from '../../language/BanglaConverter'
import EnglishConverter from '../../language/EnglishConverter'
import LanguageMode from '../../localStorage/LanguageMode'

export default class CartItems extends Component {
    constructor() {
        super();
        this.state = {
            cartView: "",
            totalPrice: 0,
            reload: false,
            itemCount: 0
        }
    }
    componentDidMount() {
        this.loadCartData()
    }


    loadCartData() {
        let arr = Cart.loadCart();
        this.setState({ itemCount: arr.length })
        if (arr.length > 0) {
            const view = arr.map(arr => {
                return (<Col sm={12} md={12} lg={12} className="p-2">
                    <div>
                        <Card className="p-4">
                            <Card.Body>
                                <Row className="cart">
                                    <Col lg={2} md={2} sm={2}>
                                        <img className="vertical-center" src={"" + arr.img} alt="smiley" width="80" height="80" />
                                    </Col>
                                    <Col lg={2} md={2} sm={2}>
                                        <Card.Title className="title text-center vertical-center">{arr.title}</Card.Title>
                                    </Col>
                                    <Col lg={2} md={2} sm={2}>
                                        <Card.Title className="title text-center vertical-center">{arr.price}</Card.Title>
                                    </Col>
                                    <Col lg={1} md={1} sm={1}>
                                        <img className="vertical-center icon" onClick={() => this.increace(arr.id)} src={plus} alt="delete" />
                                    </Col>
                                    <Col lg={1} md={1} sm={1}>
                                        <img className="vertical-center icon" onClick={() => this.decrease(arr.id)} src={minus} alt="delete" />
                                    </Col>
                                    <Col lg={1} md={1} sm={1}>
                                        <img className="vertical-center icon" onClick={() => this.remove(arr.id)} src={deleteImg} alt="delete" />
                                    </Col>
                                    <Col lg={3} md={3} sm={3}>
                                        <Card.Title className="title text-center vertical-center">{this.processPriceData(arr.id, arr.price)}</Card.Title>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>)
            })
            this.setState({ cartView: view })
        } else {
            this.setState({ cartView: "" })
        }
    }

    decrease(x) {
        let data = { id: x }
        Cart.decreaseQuantity(data)
        this.setState({ totalPrice: 0 })
        this.setState({ reload: true })
    }

    increace(x) {
        let data = { id: x }
        Cart.increaseQuantity(data)
        this.setState({ totalPrice: 0 })
        this.setState({ reload: true })
    }

    remove(x) {
        let data = { id: x }
        Cart.remove(data)
        this.setState({ totalPrice: 0 })
        this.setState({ reload: true })
    }

    processPriceData(id, price) {
        let data = { id: id }
        let quantity = Cart.getQuantity(data)
        if (LanguageMode.loadMode() === "1") {
            let price_en = parseInt(EnglishConverter.execute(price))
            this.setState({ totalPrice: this.state.totalPrice + price_en * quantity })
            return "" + price + "*" + BanglaConverter.execute("" + quantity) + " = " + BanglaConverter.execute("" + price_en * quantity) + " টাকা"
        }
    }

    reloadCart = () => {
        if (this.state.reload === true) {
            this.loadCartData()
            this.setState({ reload: false })
        }
    }

    render() {
        return (
            <Fragment>
                {this.reloadCart()}
                <Container>
                    <Row>
                        {this.state.cartView}
                        <Col>
                            {this.state.itemCount > 0 ? this.state.totalPrice : ""}
                        </Col>
                        <Col>
                            {this.state.itemCount > 0 ? <Button>Purchase</Button> : <h1>Cart is Empty!</h1>}
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
