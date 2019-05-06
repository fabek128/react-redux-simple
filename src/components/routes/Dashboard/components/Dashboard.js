/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import {
  Grid,
  Row,
  Col,
  Form,
} from 'react-bootstrap';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import Loader from '../../../common/Loader/Loader';
import './Dashboard.scss';


const Dashboard = ({
  handleSubmit,
  onTextChange,
  wordAction,
  returnedText,
}) => {
  const render = wordAction.loading
    ? <Loader />
    : (
      <Row>
        <Col md={12}>
          <h1>¡HOLA!</h1>
        </Col>
        <Col md={12}>
          <h2>
La prueba consiste en que haga un post a la api con cualquier palabra. Luego, mas abajo mostrará
            lo que la api retorna.
          </h2>
        </Col>

      </Row>
    );

  return (
    <div className="dashboardSection">
      <Grid>
        <Row>
          <div className="cardGroup">
            <Col xs={12} md={4}>
              <div className="cardItem">
                {render}
              </div>
            </Col>

            <Col xs={12} md={4}>
              <div className="cardItem">
                <h2>Palabra</h2>

                <div className="dotDivider" />

                <Form onSubmit={handleSubmit}>
                  <input onChange={(e) => { onTextChange(e); }} />
                  <button className="btn btn-blue" type="button" onClick={handleSubmit}>Enviar</button>
                </Form>

                <div className="dotDivider" />

                <div>
                  {returnedText}
                </div>

              </div>
            </Col>
          </div>
        </Row>
      </Grid>
    </div>
  );
};

Dashboard.propTypes = {
  handleSubmit: PropTypes.func,
  onTextChange: PropTypes.func,
  wordAction: PropTypes.object,
  returnedText: PropTypes.string,
};

Dashboard.defaultProps = {
  handleSubmit: () => {},
  onTextChange: () => {},
  wordAction: {},
  returnedText: '',
};

export default reduxForm({
  form: 'DashBoard',
})(Dashboard);