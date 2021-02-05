
import React from 'react'
import { Card ,Button} from "react-bootstrap";
import './job.css';

export default function Item() {
        return (
                <div className='m-2 kard' >
                        <Card style={{ width: 'auto' }}>
                                <Card.Img variant="top" src="https://source.unsplash.com/1024x400/?poverty" roundedCircle />
                                <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                        </Card>

                </div>
        )
}
