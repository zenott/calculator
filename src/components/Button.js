import React from 'react';
import PropTypes from 'prop-types';
import { normal, wide } from '../styles/Button.module.css';

function Button({ name, isWide, color }) {
  return (
    <div className={isWide ? wide : normal} style={{ backgroundColor: color }}>
      {name}
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  isWide: PropTypes.bool,
  color: PropTypes.string,
};

Button.defaultProps = {
  isWide: false,
  color: 'orange',
};

export default Button;
