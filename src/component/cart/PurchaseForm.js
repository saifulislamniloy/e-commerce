import React, { Component, Fragment } from 'react'
import { Container, Form , Button} from 'react-bootstrap'
import Cart from '../../cart/Cart'
import AppUrl from '../../router/AppUrl'
import axios from 'axios';

export default class PurchaseForm extends Component {

    postCart(){
        let body = Cart.processCartForPost()        
        let config={
            headers:{'Content-Type': 'application/json' }
        }
    
        axios.post(AppUrl.cart, body, config)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        console.log(body)
    }

    render() {
        return (
            <Fragment>
                <Container>
                    <Form>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPhone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="text" placeholder="Phone Number" />
                        </Form.Group>
                        <Form.Group controlId="formBasicAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Address" />
                        </Form.Group>
                        <Button onClick={()=> this.postCart()}>Place Order</Button>
                    </Form>
                </Container>
            </Fragment>
        )
    }
}
