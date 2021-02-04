import React, { Component } from 'react';
import Slider from "./componment/homecompo/Crousel";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './componment/homecompo/Header';
import { Col, Container, Row } from 'react-bootstrap';
import HeaderText from './componment/homecompo/HeaderText';
function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Container>
          <Row>
            <Col lg="9">
            <Slider />
            <HeaderText />
            </Col>
            <Col lg="3">
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
