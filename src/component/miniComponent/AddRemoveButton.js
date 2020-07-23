import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import plus from '../../asset/icon/plus.png'
import minus from '../../asset/icon/minus.png'
import Cart from '../../cart/Cart'

export default class AddRemoveButton extends Component {
    constructor(){
        super();
        this.state={
            count: 0
        }
    }
    componentDidMount(){
        this.setState({count:Cart.itemCount(this.props.id)})
    }
    decrease() {
        let data = { id: this.props.id }
        Cart.decreaseQuantity(data)
        this.setState({count:Cart.itemCount(this.props.id)})
    }

    increace() {
        let data = { id: this.props.id }
        Cart.increaseQuantity(data)
        this.setState({count:Cart.itemCount(this.props.id)})
    }

    render() {
        return (
            <div className="addRemoveButton horizontal-center">
                <Row className="box m-0 text-center p-1">
                    <Col lg={4} md={4} sm={4}>
                        <img className="icon" onClick={()=> this.decrease()} src={minus} alt="delete" />
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                        <h6 className="count vertical-center">{this.state.count}</h6>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                        <img className="icon" onClick={()=> this.increace()} src={plus} alt="delete" />
                    </Col>
                </Row>
            </div>
        )
    }
}
