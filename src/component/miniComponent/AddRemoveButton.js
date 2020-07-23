import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import plus from '../../asset/icon/plus.png'
import minus from '../../asset/icon/minus.png'

export default class AddRemoveButton extends Component {
    render() {
        return (
            <div className="addRemoveButton">
                <Row className="box">
                    <Col lg={4} md={4} sm={4}>
                        <img className="icon" src={plus} alt="delete" />
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                        <h6>100</h6>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                        <img className="icon" src={minus} alt="delete" />
                    </Col>
                </Row>
            </div>
        )
    }
}
