import React, { Component, Fragment } from 'react'
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import TopBannerItems from '../../language/TopBannerItems';
import LanguageMode from '../../localStorage/LanguageMode';
import { Link } from 'react-router-dom';

export default class TopBanner extends Component {
    constructor(){
        super();
        this.state={
            languageMode:LanguageMode.loadMode(),
            key:""
        }
    }

    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topBanner m-0 p-0">
                    <Container fluid={true} className="banner ">
                        <Container>
                            <Row className="searchLayout">
                                <Col lg={8} md={8} sm={8}>
                                    <Form>
                                        <Form.Group>
                                            <Form.Control id="keyId" type="text" placeholder={TopBannerItems.getSearchBarPlaceHolder(this.state.languageMode)} value={"" + this.state.key} onChange={e => this.setState({ key: e.target.value })}/>
                                        </Form.Group>
                                    </Form>
                                </Col>
                                <Col lg={4} md={4} sm={4}>
                                    <Button variant="primary">
                                        <Link to= {"/search/"+this.state.key} className="title">{TopBannerItems.getSearchButtonText(this.state.languageMode)}</Link>
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </Container>
                </Container>
            </Fragment>
        )
    }
}
