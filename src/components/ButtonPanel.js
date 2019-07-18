import React from 'react';
import Button from './Button';
import { group } from '../styles/ButtonPanel.module.css';

function ButtonPanel() {
  return (
    <div className="button-panel">
      <div className={group}>
        <Button name="AC" color="lightgrey" />
        <Button name="+/-" color="lightgrey" />
        <Button name="%" color="lightgrey" />
        <Button name="÷" />
      </div>
      <div className={group}>
        <Button name="7" color="lightgrey" />
        <Button name="8" color="lightgrey" />
        <Button name="X" color="lightgrey" />
        <Button name="+" />
      </div>
      <div className={group}>
        <Button name="4" color="lightgrey" />
        <Button name="5" color="lightgrey" />
        <Button name="6" color="lightgrey" />
        <Button name="-" />
      </div>
      <div className={group}>
        <Button name="1" color="lightgrey" />
        <Button name="2" color="lightgrey" />
        <Button name="3" color="lightgrey" />
        <Button name="+" />
      </div>
      <div className={group}>
        <Button name="0" isWide color="lightgrey" />
        <Button name="." color="lightgrey" />
        <Button name="=" />
      </div>
    </div>
  );
}

export default ButtonPanel;
