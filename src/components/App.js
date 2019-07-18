import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import { main } from '../styles/App.module.css';

function App() {
  return (
    <div className={main}>
      <Display result="result" />
      <ButtonPanel />
    </div>
  );
}

export default App;
