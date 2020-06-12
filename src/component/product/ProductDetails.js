import React, { Component, Fragment } from 'react'
import axios from 'axios';
import AppUrl from '../../router/AppUrl';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleView: "",
            priceView: "",
            imageView: "",
            amount: 1
        }
    }
    componentDidMount() {
        axios.get(AppUrl.productDetail + "/" + this.props.id)
            .then(response => {
                console.log(response);
                this.setProductDetail(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    setProductDetail(data) {
        const productData = data;
        const imageView = productData.map(productData => {
            return (
                <img className="img" src={"" + productData.link} alt="smiley" />
            )
        })
        const titleView = productData.map(productData => {
            return (
                <h1>{productData.title}</h1>
            )
        })

        const priceView = productData.map(productData => {
            return (
                <h5>{productData.price}</h5>
            )
        })
        this.setState({ imageView: imageView, titleView: titleView, priceView: priceView })
    }

    onClickPlus() {
        this.setState({ amount: this.state.amount + 1 });
    }
    onClickMinus() {
        if (this.state.amount > 1)
            this.setState({ amount: this.state.amount - 1 });
    }
    setAmount = () => {
        return (
            <label>{this.state.amount}</label>
        )
    }

    render() {
        return (
            <Fragment>
                <Container>
                    <Row className="productDetail">
                        <Col sm={12} md={6} lg={6}>
                            {this.state.imageView}
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <Row>
                                <Col sm={12} md={12} lg={12}>
                                    {this.state.titleView}
                                </Col>
                                <Col sm={12} md={12} lg={12}>
                                    {this.state.priceView}
                                </Col>
                            </Row>
                            <Row className="mb-2">
                                <Col sm={2} md={2} lg={2}>
                                    <Button onClick={() => this.onClickMinus()} variant="primary">Minus</Button>
                                </Col>
                                <Col sm={2} md={2} lg={2}>
                                    {this.setAmount()}
                                </Col>
                                <Col sm={2} md={2} lg={2} >
                                    <Button onClick={() => this.onClickPlus()} variant="primary">Plus</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12} md={12} lg={12} >
                                    <Button variant="primary">Add to Cart</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
