import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import withAuthorization from './withAuthorization';
import NavBar from './NavBar/NavBar';

import { Grid, Row, Col } from 'react-flexbox-grid';
import {
  Router, 
  Route, 
  Link, 
}from 'react-router';

const HomePage = React.createClass({
   render: function() {
     return(
      <div>
         <h1>Home Page</h1>
         <ul>
            <li><Link to={routes.LANDING}>Inicio</Link></li>
    				<li><Link to={routes.HOME}>Home</Link></li>
    				<li><Link to={routes.ACCOUNT}>Cuenta</Link></li>
    				<li><SignOutButton /></li>
         </ul>
      </div>
     );
   }
});
/*
const HomePage = () =>
  <div>
 	<NavBar></NavBar>
     <ul>
       <li><Link to="link-one">Link 1</Link></li>
       <li><Link to="link-two">Link 2</Link></li>
     </ul>
  </div> */

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);