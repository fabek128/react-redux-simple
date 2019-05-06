import React from 'react';
import { Col, Row, Grid } from 'react-bootstrap';

import './NoMatch.scss';

export default () => (
  <div className="noMatchSection">
    <Grid>
      <Row>
        <div className="cardGroup">
          <Col md={12}>
            <div className="cardItem">
              <h2>404!</h2>
              <h1>PAGINA NO ENCONTRADA</h1>
            </div>
          </Col>
        </div>
      </Row>
    </Grid>
  </div>
);