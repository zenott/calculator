import React from 'react';
import PropTypes from 'prop-types';
import { display } from '../styles/Display.module.css';

function Display({ result }) {
  return <div className={display}>{result}</div>;
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
