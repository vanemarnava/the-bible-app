import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';

import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';

import './Account/Account.css';

const AccountPage = (props, { authUser }) =>
  <Grid>
    <Row>
      <Col className="" xs={12} sm={12} md={12} lg={12}>
        <Row center='xs'>
          <Col xs={8}>
				    <h3 className='Acco'>Account: {authUser.email}</h3>
				    <br />
				    <PasswordForgetForm />
				    <PasswordChangeForm />
 					</Col>
        </Row>
      </Col>
    </Row>
  </Grid>

AccountPage.contextTypes = {
  authUser: PropTypes.object,
};

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);