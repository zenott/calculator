import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import { main } from '../styles/App.module.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: '0', next: null, operation: null };
  }

  handleClick = buttonName => {
    this.setState(prevState => calculate(prevState, buttonName));
  };

  render() {
    const { total, next } = this.state;
    return (
      <div className={main}>
        <Display result={next || total} />
        <ButtonPanel handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
