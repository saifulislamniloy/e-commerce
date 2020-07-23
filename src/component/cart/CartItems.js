import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import Cart from '../../cart/Cart'
import plus from '../../asset/icon/plus.png'
import minus from '../../asset/icon/minus.png'
import deleteImg from '../../asset/icon/delete.png'
import BanglaConverter from '../../language/BanglaConverter'
import LanguageMode from '../../localStorage/LanguageMode'
import { Link } from 'react-router-dom'

export default class CartItems extends Component {
    constructor() {
        super();
        this.state = {
            cartView: "",
            totalPrice:"",
            reload: false,
            itemCount: 0
        }
    }


    componentDidMount() {
        this.loadCartData()
    }


    componentDidUpdate(prevProps) {
        if (this.props.languageMode !== prevProps.languageMode) {
            this.loadCartData()
        }
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
                                        <Card.Title className="title text-center vertical-center">{this.props.languageMode == 1 ? arr.title : arr.title_en}</Card.Title>
                                    </Col>
                                    <Col lg={2} md={2} sm={2}>
                                        <Card.Title className="title text-center vertical-center">{this.props.languageMode == 1 ? BanglaConverter.execute(""+arr.price)+" টাকা" : arr.price+" BDT"}</Card.Title>
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
            this.setState({ cartView: view , totalPrice:this.processTotalPrice()})
        } else {
            this.setState({ cartView: "" })
        }
    }

    processTotalPrice(){
        if(this.props.languageMode === "1"){
            return "মোট "+ BanglaConverter.execute(""+Cart.getTotalPrice())+" টাকা"
        }else{
            return "Total "+ Cart.getTotalPrice()+" BDT"
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
            return "" + BanglaConverter.execute(""+price) + "*" + BanglaConverter.execute("" + quantity) + " = " + BanglaConverter.execute("" + price * quantity) + " টাকা"
        }else{
            return "" + price + "*" + quantity + " = " + price * quantity + " BDT"
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
                        <Col sm={12} md={12} lg={12}>
                            {this.state.itemCount > 0 ? <Card className="text-center p-3">{this.state.totalPrice}</Card> : ""}
                        </Col>
                        <Col sm={12} md={12} lg={12}>
                            {this.state.itemCount > 0 ? <Link to="/continue-purchase"><Button>Confirm Purchase</Button></Link> : <h1>Cart is Empty!</h1>}
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
