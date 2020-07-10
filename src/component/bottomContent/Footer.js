import React, { Component, Fragment } from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import LanguageMode from '../../localStorage/LanguageMode';
import FooterItem from '../../language/FooterItem';

export default class Footer extends Component {
    constructor(){
        super();
        this.state={
            languageMode: LanguageMode.loadMode()
        }
    }
    render() {
        return (
            <Fragment>
                <Container fluid={true}>
                <hr/>
                    <Row className="footer">
                       
                        <Col lg={4} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="header">{FooterItem.customerService(this.state.languageMode)}</h1>
                            <a className="link" href="/" target="_blank" rel="noopener noreferrer">{FooterItem.contactUs(this.state.languageMode)}</a><br />
                            <a className="link" href="/" target="_blank" rel="noopener noreferrer">{FooterItem.faq(this.state.languageMode)}</a>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="header">{FooterItem.aboutSite(this.state.languageMode)}</h1>
                            <a className="link" href="/" target="_blank" rel="noopener noreferrer">{FooterItem.privacyPolicy(this.state.languageMode)}</a><br />
                            <a className="link" href="/" target="_blank" rel="noopener noreferrer">{FooterItem.termsOfUse(this.state.languageMode)}</a>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="header">{FooterItem.forBusiness(this.state.languageMode)}</h1>
                            <a className="link" href="/" target="_blank" rel="noopener noreferrer">{FooterItem.corporate(this.state.languageMode)}</a>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
