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
                            <h1 className="header">{FooterItem.customerService(this.props.languageMode)}</h1>
                            <a className="link" href="/" target="_blank" rel="noopener noreferrer">{FooterItem.contactUs(this.props.languageMode)}</a><br />
                            <a className="link" href="/" target="_blank" rel="noopener noreferrer">{FooterItem.faq(this.props.languageMode)}</a>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="header">{FooterItem.aboutSite(this.props.languageMode)}</h1>
                            <a className="link" href="/" target="_blank" rel="noopener noreferrer">{FooterItem.privacyPolicy(this.props.languageMode)}</a><br />
                            <a className="link" href="/" target="_blank" rel="noopener noreferrer">{FooterItem.termsOfUse(this.props.languageMode)}</a>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="header">{FooterItem.forBusiness(this.props.languageMode)}</h1>
                            <a className="link" href="/" target="_blank" rel="noopener noreferrer">{FooterItem.corporate(this.props.languageMode)}</a>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
