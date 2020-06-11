import React, { Component, Fragment } from 'react'
import { Container, Col, Card, Row } from 'react-bootstrap'
import axios from 'axios';
import AppUrl from '../../router/AppUrl';

export default class Category extends Component {
    constructor() {
        super();
        this.state = {
            categoryListView: ""
        }
    }

    componentDidMount() {
        axios.get(AppUrl.categoryList)
            .then(response => {
                console.log(response);
                this.setCatergories(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    setCatergories(data) {
        const categoryData = data;
        const view = categoryData.map(categoryData => {
            return (<Col sm={12} md={6} lg={4} className="p-2">
                <div>
                    <Card className="category">
                        <Card.Img variant="top" src={"" + categoryData.link} className="img"/>
                        <Card.Body>
                            <Card.Title className="cardTitle">{categoryData.title}</Card.Title>
                            <Card.Text className="subtitle">
                                {categoryData.id}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Col>)
        })
        this.setState({ categoryListView: view })
    }

    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        {this.state.categoryListView}
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
