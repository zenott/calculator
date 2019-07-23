import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { group } from '../styles/ButtonPanel.module.css';

function ButtonPanel({ handleClick }) {
  return (
    <div className="button-panel">
      <div className={group}>
        <Button name="AC" color="lightgrey" handleClick={handleClick} />
        <Button name="+/-" color="lightgrey" handleClick={handleClick} />
        <Button name="%" color="lightgrey" handleClick={handleClick} />
        <Button name="÷" handleClick={handleClick} />
      </div>
      <div className={group}>
        <Button name="7" color="lightgrey" handleClick={handleClick} />
        <Button name="8" color="lightgrey" handleClick={handleClick} />
        <Button name="9" color="lightgrey" handleClick={handleClick} />
        <Button name="×" handleClick={handleClick} />
      </div>
      <div className={group}>
        <Button name="4" color="lightgrey" handleClick={handleClick} />
        <Button name="5" color="lightgrey" handleClick={handleClick} />
        <Button name="6" color="lightgrey" handleClick={handleClick} />
        <Button name="-" handleClick={handleClick} />
      </div>
      <div className={group}>
        <Button name="1" color="lightgrey" handleClick={handleClick} />
        <Button name="2" color="lightgrey" handleClick={handleClick} />
        <Button name="3" color="lightgrey" handleClick={handleClick} />
        <Button name="+" handleClick={handleClick} />
      </div>
      <div className={group}>
        <Button name="0" isWide color="lightgrey" handleClick={handleClick} />
        <Button name="." color="lightgrey" handleClick={handleClick} />
        <Button name="=" handleClick={handleClick} />
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
