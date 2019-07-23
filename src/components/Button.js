import React from 'react';
import PropTypes from 'prop-types';
import { normal, wide } from '../styles/Button.module.css';

function Button({ name, isWide, color, handleClick }) {
  return (
    <button
      type="button"
      className={isWide ? wide : normal}
      style={{ backgroundColor: color }}
      onClick={() => handleClick(name)}
    >
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  isWide: PropTypes.bool,
  color: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  isWide: false,
  color: 'orange',
};

export default Button;
