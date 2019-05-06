import React from 'react';
import {
  Navbar,
} from 'react-bootstrap';
// import { Link } from 'react-router-dom';

import './Header.scss';


export default () => (
  <div className="headerSection">
    <Navbar collapseOnSelect className="customNav">
      <Navbar.Header>
        <Navbar.Brand>
          Titulo de prueba
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
  </div>
);