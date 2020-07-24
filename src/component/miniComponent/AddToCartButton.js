import React, { Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import plus from '../../asset/icon/plus.png'
import minus from '../../asset/icon/minus.png'
import Cart from '../../cart/Cart'
import ProductItems from '../../language/ProductItems'

export default class AddToCartButton extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        this.setState({ count: Cart.itemCount(this.props.id) })
    }

    addToCart(productId, img, title, title_en, price) {
        let data = { id: productId, quantity: 1, img: img, title: title, title_en: title_en, price: price }
        Cart.addToCart(data)
        this.setState({count:1})
    }

    decrease() {
        if (this.state.count === 1) {
            this.remove()
            this.setState({ count: Cart.itemCount(this.props.id) })
        }else{
            let data = { id: this.props.id }
            Cart.decreaseQuantity(data)
            this.setState({ count: Cart.itemCount(this.props.id) })
        }
    }

    increace() {
        let data = { id: this.props.id }
        Cart.increaseQuantity(data)
        this.setState({ count: Cart.itemCount(this.props.id) })
    }

    remove() {
        let data = { id: this.props.id }
        Cart.remove(data)
    }


    render() {
        return (
            <div className="addRemoveButton horizontal-center">
            {
                this.state.count < 1 ?
                    <Button onClick={() => this.addToCart(
                        this.props.id,
                        this.props.img,
                        this.props.title,
                        this.props.title_en,
                        this.props.price)} variant="primary">{ProductItems.addToCart(this.props.languageMode)}</Button>
                    :
                    <Row className="box m-0 text-center p-1">
                        <Col lg={4} md={4} sm={4}>
                            <img className="icon" onClick={() => this.decrease()} src={minus} alt="delete" />
                        </Col>

                        <Col lg={4} md={4} sm={4}>
                            <h6 className="count vertical-center">{this.state.count}</h6>
                        </Col>

                        <Col lg={4} md={4} sm={4}>
                            <img className="icon" onClick={() => this.increace()} src={plus} alt="delete" />
                        </Col>
                    </Row>
            }
        </div>
        )
    }
}
