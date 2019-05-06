import React from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

const Input = ({
  input,
  label,
  type,
}) => (
  <FormGroup>
    <ControlLabel>{label}</ControlLabel>
    <FormControl
      {...input}
      type={type}
    />
  </FormGroup>
);

Input.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  input: {},
  label: '',
  type: '',
};

export default Input;