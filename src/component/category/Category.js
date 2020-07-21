import React, { Component, Fragment } from 'react'
import { Container, Col, Card, Row } from 'react-bootstrap'
import axios from 'axios';
import AppUrl from '../../router/AppUrl';
import { Link } from 'react-router-dom';
import LanguageMode from '../../localStorage/LanguageMode';

export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reload:false,
            languageMode:LanguageMode.loadMode(),
            categoryListView: ""
        }
    }

    componentDidMount() {
        this.loadData()
    }

    loadData(){
        axios.get(AppUrl.categoryList+"/"+this.props.languageMode)
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
                   <Link to={"/products/"+categoryData.c_id}> <Card className="category">
                        <Card.Img variant="top" src={"" + categoryData.c_imgLink} className="img"/>
                        <Card.Body>
                            <Card.Title className="title text-center">{categoryData.c_title}</Card.Title>
                        </Card.Body>
                    </Card></Link>
                </div>
            </Col>)
        })
        this.setState({ categoryListView: view })
    }

    reload = () => {
        // if (this.state.languageMode !== this.props.languageMode ){
        //     this.loadData()
        //     this.setState({reload:false})
        // }
    }

    render() {
        return (
            <Fragment>
                {this.reload()}
                <Container>
                    <Row>
                        {this.state.categoryListView}
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
