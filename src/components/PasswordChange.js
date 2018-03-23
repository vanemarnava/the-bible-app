import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import { auth } from '../firebase';

import './PasswordChange/PasswordChange.css'

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    auth.doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '';

    return (
      <Grid>
        <Row>
          <Col className="" xs={12} sm={12} md={12} lg={12}>
            <Row center='xs'>
              <Col xs={8}>
                <form onSubmit={this.onSubmit}>
                  <input
                    className='change-input'
                    value={passwordOne}
                    onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                    type="password"
                    placeholder="New Password"
                  />
                  <br />
                  <input
                    className='change-input'
                    value={passwordTwo}
                    onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                    type="password"
                    placeholder="Confirm Password"
                  />
                  <br />
                  <button className='btn-change' disabled={isInvalid} type="submit">
                    Reset My Password
                  </button>

                  { error && <p>{error.message}</p> }
                </form> 
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default PasswordChangeForm;