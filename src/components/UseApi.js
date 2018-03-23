import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import withAuthorization from './withAuthorization.js';
import APIAccess from './APIAccess'

const UseApi = () =>
  <Grid>
    <Row>
      <Col className="" xs={12} sm={12} md={12} lg={12}>
     		<Row center='xs'>
          <Col xs={6}>
				    <h2>Search </h2>
				    <p> Enter what you want to read.</p>
				  	<APIAccess />
		  		</Col>
        </Row>
      </Col>
    </Row>
  </Grid>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(UseApi);