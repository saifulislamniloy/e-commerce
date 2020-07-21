import React, { Component, Fragment } from 'react'
import axios from 'axios';
import AppUrl from '../../router/AppUrl';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import LanguageMode from '../../localStorage/LanguageMode';
import ProductItems from '../../language/ProductItems';

export default class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            languageMode:LanguageMode.loadMode(),
            titleView: "",
            priceView: "",
            imageView: "",
            specView: "",
            ratingView:"",
            amount: 1
        }
    }
    componentDidMount() {
        this.loadData()
    }

    componentDidUpdate(prevProps) {
        if (this.props.languageMode !== prevProps.languageMode) {
            this.loadData()
        }
    }

    loadData(){
        axios.get(AppUrl.productDetail + "/" + this.props.id+"/"+this.props.languageMode)
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
                <img className="img" src={"" + productData.p_imgLink} alt="smiley" />
            )
        })
        const titleView = productData.map(productData => {
            return (
                <h1>{productData.p_title}</h1>
            )
        })
        const ratingView = productData.map(productData => {
            return (
                <h5>{""+ProductItems.rating(this.state.languageMode) +": "+productData.point/productData.person}</h5>
            )
        })

        const priceView = productData.map(productData => {
            return (
                <h5>{productData.price + "/" + productData.amount}</h5>
            )
        })
        const specView = productData.map(productData => {
            return (
                <h6 className="spec">{productData.specification}</h6>
            )
        })
        this.setState({ imageView: imageView, titleView: titleView, ratingView:ratingView, priceView: priceView, specView: specView })
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
                            <Card>
                                {this.state.imageView}
                            </Card>
                        </Col>
                        <Col className="des" sm={12} md={6} lg={6}>
                            <Row>
                                <Col sm={12} md={12} lg={12}>
                                    {this.state.titleView}
                                </Col>
                                <Col sm={12} md={12} lg={12}>
                                    {this.state.ratingView}
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
                                <Col sm={4} md={4} lg={4} >
                                    <Button variant="primary">{ProductItems.addToCart(this.state.languageMode)}</Button>
                                </Col>
                                <Col sm={4} md={4} lg={4} >
                                <a href="https://www.youtube.com" target="#"><img height="50" width="50" alt="smiley" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX/AAD/////u7v/6+v/0ND/aWn/mZn/zc3/9fX/h4f/5ub/+Pj/tbX/t7f/oKD/ODj/Kir/3d3/wMD/MzP/UVH/1dX/yMj/qan/lJT/TU3/gID/Fxf/PT3/eHj/Dg7/jY3/ZWX/Q0P/XV3/IiL/cXH/q6v/X1//eXnZjuaVAAAE20lEQVR4nO2d63aiQAyAOyKgXAVF0Lbrtbvv/4YLZ9didUDQQEjI9689RyffwcCQub0p7rxhB9A5YkgfMaSPGNJHDOkjhvQRQ/qIIX3EkD5iSB8xpI8Y0kcM6SOG9BFD+oghfcSQPmJIHzGkjxi+jHEhml4Tff+/6wBeMXTdWU6SrD0/DQIry3Z709yEYbh4e45F/tmNae53WWYFQep76yQpmnDd3gxdw4mi2LPm27O5OZzenzRpy/vpsDHP27nlxVHkGO18Gxo6dmx9HjfLvpzqeF9ujp9WbDtQhnZqPvur65qFmdovGjrBCtviIaug/mLWGdp77Ogbsq+7ktWG0fAvX8kqam+4xQ66JduWhk6IHXFrwop01BuuscN9inVzQw871ifxmhr62JE+jd/MMMGO8wWSJoYudpQvcd9nvTc8Ygf5EsfHhlTvMhfu7ja3hu4JO8QXOd3+Tm8NA+wIXyZ4YIgdHwD1htSzsMCrNTxghwfAoc7QwI4OBKPGcIIdHAiTGsMzdnAgnGsMP7CDA+Gj2tDBjg0Ip9LQxg4NCLvS0MIODQir0vATOzQgPisNedxobm4114Yz7MjAmFUY8ujRFBgVhjRriDrWFYYpdmBgpBWGXB4WPx8X14Y8eqUF5wrDJXZgYCwrDLHjAmSshnwehz8eiFeGlMcrbkm0hjF0M4hTOGKtIfig2iRGm37jaw3Ba6UTpTLo72yIpzWcQzdT1LwMnG7EXGtoQjfzr6qXbKC/twGm1hB84PBSt4x/QX/zQ45aQ/A3/LIy23uf/kNrCH5zv6o9Gz2XgBa9GyoV9ZqOWsMZeLb8HD9QcY/Dy79mGIZ9pqPWMAJv5s5QGb3NB4yQDPub06kznIK3ojPM07GXDvkU0VCpoIcegM4QfuCpylDNwLvAd5TDTyiGSjldp6POEL7iXWOYN9dtZa+sepeGX+Ct1BoqlXaZjl8aQ/ia/gPDTtOxrOtjGubp2NlUT53hDryVx4Z5OnY0KrvTGML/ZJoY5vnfSTqWZQx8w27ScVCGeTr+Bm9bZwjf7W9smKcj9KTIcpFQaQheamtjqJQHm45lsW0whsBpMkhDZezh2h6mYf4GB5aOQzVUygcazBmuoVIwd5zhGnK/htzzkP29lPvzsIc+Da9+6R+NIf93C3k/bM/Q3vH512n419r410v517z5j1vwH3viP37IfwyY/zg+/7kY/OfT8J8TxX9eG/+5iSOYX8p/jjD/ed785+rzX2/Bf80M/3VP/Neu8V9/yH8NKf91wCMw5L8en/+eCvz3xeC/twn//Wn4PBCr9hjiv08U/72+RrBfG5fHRfWee/z3TeS/9yWTW03N/qVMeqZ1e9Dy30eYR6+mbi9o/vt5s9iT3a815FDJuDW6+Zv/2Qj8z7cgn4kPzygZwTkzIzgriPT4RaPznij33XSzsHSGZO82jc9do1pXbHF23gjOP1T8z7BUIziHVPE/S7aA+3nA/68k6zOdy4vJ+Vzuaxifra73dYvD65Nk7flpEFhZttub5ioMw2d/1Yv8syvT3O+yzAqC1PfsJCmacNs5wRk2wrgQTa+Jvv/fdQCdG6IjhvQRQ/qIIX3EkD5iSB8xpI8Y0kcM6SOG9BFD+oghfcSQPmJIHzGkjxjSRwzpI4b0EUP6iCF9/gKCNIdvAhrz/wAAAABJRU5ErkJggg=="/></a>
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col sm={12} md={12} lg={12} >
                                    {this.state.specView}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
