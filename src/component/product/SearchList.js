import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import axios from 'axios';
import AppUrl from '../../router/AppUrl';
import { Link } from 'react-router-dom';
import ProductItems from '../../language/ProductItems';
import Cart from '../../cart/Cart';
import AmountBanglaConverter from '../../language/AmountBanglaConverter';
import BanglaConverter from '../../language/BanglaConverter';

export default class SearchList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchListView: "",
            data: []
        }
    }


    componentDidMount() {
        axios.get(AppUrl.searchList + "/" +this.props.languageMode+"/"+this.props.id)
            .then(response => {
                console.log(response);
                this.setState({ data: response.data })
                this.setProducts(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidUpdate(prevProps) {
        if (this.props.languageMode !== prevProps.languageMode) {
            this.setProducts(this.state.data);
        }
    }


    setProducts(data) {
        const productData = data;
        const view = productData.map(productData => {
            return (<Col sm={6} md={4} lg={3} className="p-2">
                <div className="productList">
                    <Card className="card">
                        <Link to={"/product-detail/" + productData.p_id}>
                            <Button className="button" variant="primary">{ProductItems.details(this.props.languageMode)}</Button>
                        </Link>
                        <Card.Img variant="top" src={"" + productData.p_imgLink} className="img" />
                        <Card.Body>
                            <Card.Title className="title text-center">{this.props.languageMode == 1 ? productData.p_title : productData.p_title_eng}</Card.Title>
                            <Card.Text className="title text-center">{this.props.languageMode == 1 ? AmountBanglaConverter.execute(productData.amount) : productData.amount}</Card.Text>
                            <Card.Text className="title text-center">{this.props.languageMode == 1 ? BanglaConverter.execute(""+productData.price)+" টাকা" : productData.price +" BDT"} </Card.Text>
                        </Card.Body>
                        <Button onClick={()=> this.addToCart(productData.p_id, 
                            productData.p_imgLink,
                            productData.p_title, 
                            productData.p_title_eng,
                            productData.price )} variant="primary">{ProductItems.addToCart(this.props.languageMode)}</Button>
                    </Card>
                </div>
            </Col>)
        })
        this.setState({ searchListView: view })
    }

    addToCart(productId, img, title, title_en, price){
        let data = {id:productId, quantity:1, img:img, title:title, title_en:title_en, price:price}
        Cart.addToCart(data)
    }

    render() {
        return (
            <Fragment>
                 <Container>
                    <Row>
                        {this.state.searchListView}
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
