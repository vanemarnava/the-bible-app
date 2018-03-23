import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';

import SignOutButton from './SignOut';
import * as routes from '../constants/routes';

import './Navigation/Navigation.css';

const Navigation = (props, { authUser }) =>
  <div>
    { authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </div>

Navigation.contextTypes = {
  authUser: PropTypes.object,
};

const NavigationAuth = () =>

  <Grid>
    <Row>
      <Col xs={12}>
        <ul>
          <li><Link to={routes.LANDING}>Landing</Link></li>
          <li><Link to={routes.HOME}>Home</Link></li>
          <li><Link to={routes.ACCOUNT}>Account</Link></li>
          <li><Link to={routes.USE_API}>Search</Link></li>          
          <li><SignOutButton /></li>
        </ul>
      </Col>
    </Row>
  </Grid>

const NavigationNonAuth = () =>
  <Grid>
    <Row>
      <Col xs={12}>
        <ul>
          <li><Link to={routes.LANDING}>Landing</Link></li>
          <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
        </ul>
      </Col>
    </Row>
  </Grid>

export default Navigation;