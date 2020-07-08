import React, { Component, Fragment } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import LanguageMode from '../../localStorage/LanguageMode';
import CommentItems from '../../language/CommentItems';

export default class Comment extends Component {
    constructor() {
        super();
        this.state = {
            languageMode: LanguageMode.loadMode()
        }
    }
    render() {
        return (
            <Fragment>
                <Container>
                    <Form>
                        <Form.Label>{CommentItems.getCommentName(this.state.languageMode)}</Form.Label>
                        <Form.Control as="textarea" />
                        <Button variant="primary" type="submit">
                            {CommentItems.getButtonName(this.state.languageMode)}
                        </Button>
                    </Form>
                </Container>
            </Fragment>
        )
    }
}
