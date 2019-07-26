import React from 'react';
import PropTypes from 'prop-types';
import { display } from '../styles/Display.module.css';

function Display({ result }) {
  return <div className={display}>{result.slice(0, 19)}</div>;
}

Display.propTypes = {
  result: PropTypes.string.isRequired,
};

export default Display;
