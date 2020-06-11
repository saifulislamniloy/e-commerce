import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import axios from 'axios';
import AppUrl from '../../router/AppUrl';

export default class ProductList extends Component {
    constructor() {
        super();
        this.state = {
            categoryId: "1",
            productListView: ""
        }
    }

    componentDidMount() {
        axios.get(AppUrl.productList + "/" + this.state.categoryId)
            .then(response => {
                console.log(response);
                this.setProducts(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    setProducts(data) {
        const productData = data;
        const view = productData.map(productData => {
            return (<Col sm={12} md={6} lg={4} className="p-2">
                <div className="productList">
                    <Card className="card">
                        <Button variant="primary">Product Details</Button>
                        <Card.Img variant="top" src={"" + productData.link} className="img" />
                        <Card.Body>
                            <Card.Title className="title text-center">{productData.title}</Card.Title>
                            <Card.Text className="title text-center">{productData.amount}</Card.Text>
                            <Card.Text className="title text-center">{productData.price}</Card.Text>
                        </Card.Body>
                        <Button variant="primary">Add to Cart</Button>
                    </Card>
                </div>
            </Col>)
        })
        this.setState({ productListView: view })
    }

    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        {this.state.productListView}
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
