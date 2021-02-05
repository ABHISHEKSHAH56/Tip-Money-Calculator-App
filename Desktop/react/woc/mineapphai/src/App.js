import React from 'react';
import Slider from "./componment/homecompo/Crousel";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './componment/homecompo/Header';
import { Col, Container, Row } from 'react-bootstrap';
import Item from './componment/homecompo/item';
import Profilecard from './componment/homecompo/Profilecard';
import Job from './componment/homecompo/job';
import Mentor from './componment/homecompo/mentor';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Container>
          <Row>
            <Col lg="9">
            <Slider />            
            <Item />
            </Col>
            <Col lg="3">
              <Profilecard />
              <Job />
              <Mentor />
            </Col>
          </Row>
          
        </Container>
        
        <Switch>
          <Route path='/' exact />
        </Switch>
      </Router>
    </>
  )
}

export default App;
