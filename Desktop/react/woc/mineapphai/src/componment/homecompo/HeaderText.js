import React from 'react'
import { Card ,Row,Button,Col} from 'react-bootstrap'
import '../../App.css'

function HeaderText() {
        return (
                <div>
                        <Card className="Card" body>Great Heroes</Card>

                        <Row>
                                <Col lg="4">
                                        <Card style={{ width: 'auto' }}>
                                                <Card.Img variant="top" src="https://source.unsplash.com/1024x400/?poverty" />
                                                <Card.Body>
                                                        <Card.Title>Card Title</Card.Title>
                                                        <Card.Text>
                                                                Some quick example text to build on the card title and make up the bulk of
                                                                the card's content.
                                                        </Card.Text>
                                                        <Button variant="primary">Go somewhere</Button>
                                                </Card.Body>
                                        </Card>

                                </Col>
                                <Col lg="4">
                                        <Card style={{ width: 'auto' }}>
                                                <Card.Img variant="top" src="https://source.unsplash.com/1024x400/?people" />
                                                <Card.Body>
                                                        <Card.Title>Card Title</Card.Title>
                                                        <Card.Text>
                                                                Some quick example text to build on the card title and make up the bulk of
                                                                the card's content.
                                                        </Card.Text>
                                                        <Button variant="primary">Go somewhere</Button>
                                                </Card.Body>
                                        </Card>

                                </Col>
                                <Col lg="4">
                                        <Card style={{ width: 'auto' }}>
                                                <Card.Img variant="top" src="https://source.unsplash.com/1024x400/?earth" />
                                                <Card.Body>
                                                        <Card.Title>Card Title</Card.Title>
                                                        <Card.Text>
                                                                Some quick example text to build on the card title and make up the bulk of
                                                                the card's content.
                                                        </Card.Text>
                                                        <Button variant="primary">Go somewhere</Button>
                                                </Card.Body>
                                        </Card>

                                </Col>
                        </Row>

                </div>

        )
}

export default HeaderText
