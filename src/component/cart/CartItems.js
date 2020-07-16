import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Cart from '../../cart/Cart'
import plus from '../../asset/icon/plus.png'
import minus from '../../asset/icon/minus.png'
import deleteImg from '../../asset/icon/delete.png'

export default class CartItems extends Component {
    constructor() {
        super();
        this.state = {
            cartView: "",
            reload:false
        }
    }
    componentDidMount() {
        this.loadCartData()
    }


    loadCartData(){
        let arr = Cart.loadCart();
        if (arr.length > 0) {
            const view = arr.map(arr => {
                return (<Col sm={12} md={12} lg={12} className="p-2">
                    <div>
                        <Card className="p-4">
                            <Card.Body>
                                <Row className="cart">
                                    <Col lg={2} md={2} sm={2}>
                                        <img className="vertical-center" src={""+arr.img} alt="smiley" width="80" height="80"/>
                                    </Col>
                                    <Col lg={2} md={2} sm={2}>
                                        <Card.Title className="title text-center vertical-center">{arr.title}</Card.Title>
                                    </Col>
                                    <Col lg={2} md={2} sm={2}>
                                        <Card.Title className="title text-center vertical-center">{arr.price}</Card.Title>
                                    </Col>
                                    <Col lg={1} md={1} sm={1}>
                                        <img className="vertical-center icon" onClick={() => this.add(arr.id)} src={plus} alt="delete"/>
                                    </Col>
                                    <Col lg={1} md={1} sm={1}>
                                        <img className="vertical-center icon" onClick={() => this.remove(arr.id)} src={minus} alt="delete"/>
                                    </Col>
                                    <Col lg={1} md={1} sm={1}>
                                        <img className="vertical-center icon" onClick={() => this.remove(arr.id)} src={deleteImg} alt="delete"/>
                                    </Col>
                                    <Col lg={3} md={3} sm={3}>
                                        <Card.Title className="title text-center vertical-center">{arr.quantity+"*5 = 5000 BDT"}</Card.Title>
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
        this.setState({reload:true})
    }

    add(x){
        let data = { id: x }
        Cart.add(data)
        this.setState({reload:true})
    }

    reloadCart=()=>{
        if(this.state.reload === true){
            this.loadCartData()
            this.setState({reload:false})
        }
    }

    render() {
        return (
            <Fragment>
                {this.reloadCart()}
                <Container>
                    <Row>
                        {this.state.cartView}
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
