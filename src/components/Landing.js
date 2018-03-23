import React from 'react';
import logo from './../img/Bible-And-Cross-300px.png';
import { Grid, Row, Col } from 'react-flexbox-grid'; 

import './Landing/Landing.css'

const LandingPage = () =>
  <Grid>
    <Row>
      <Col className="" xs={12} sm={12} md={12} lg={12}>
        <Row center='xs'>
          <Col xs={6}>
            <img src={logo} alt='bible-logo' className='bible-logo'/>
            <h2 className='title-app'>YOUR BIBLE</h2>
            <br />
          	<button className='btn-face'>Continue with Facebook</button> 
          	<br />
          </Col>
        </Row>
      </Col>
    </Row>
  </Grid>

export default LandingPage;