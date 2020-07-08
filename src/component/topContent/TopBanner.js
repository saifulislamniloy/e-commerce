import React, { Component, Fragment } from 'react'
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import TopBannerItems from '../../language/TopBannerItems';
import LanguageMode from '../../localStorage/LanguageMode';

export default class TopBanner extends Component {
    constructor(){
        super();
        this.state={
            languageMode:LanguageMode.loadMode()
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
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Control type="text" placeholder={TopBannerItems.getSearchBarPlaceHolder(this.state.languageMode)} />
                                        </Form.Group>
                                    </Form>
                                </Col>
                                <Col lg={4} md={4} sm={4}>
                                    <Button variant="primary" type="submit">
                                        {TopBannerItems.getSearchButtonText(this.state.languageMode)}
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
