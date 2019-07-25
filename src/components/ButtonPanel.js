import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { group } from '../styles/ButtonPanel.module.css';

function ButtonPanel({ handleClick }) {
  const buttons = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  const getColor = btn => {
    if (!['÷', '×', '-', '+', '='].includes(btn)) return 'lightgrey';
  };

  return (
    <div className="button-panel">
      {buttons.map(row => (
        <div className={group} key={row.toString()}>
          {row.map(btn => (
            <Button
              name={btn}
              key={btn}
              color={getColor(btn)}
              isWide={btn === '0'}
              handleClick={handleClick}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

ButtonPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
