import operate from './operate';

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operators = ['+', '-', '×', '÷'];

export default function calculate(prevData, buttonName) {
  let { next, total, operation } = prevData;

  const noError = () => next !== 'Error';

  const maxChar = () => next && next.length === 18;

  if (buttonName === 'AC') {
    total = '0';
    next = null;
    operation = null;
  }

  if (buttonName === '=' && total && next && operation && noError()) {
    try {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    } catch (err) {
      next = 'Error';
      operation = null;
      total = null;
    }
  }

  if (buttonName === '.' && !maxChar()) {
    if (next && !next.includes('.') && noError()) {
      next += buttonName;
    } else if (!next || !noError()) {
      next = '0.';
    }
  }

  if (numbers.includes(buttonName) && next !== '0' && !maxChar()) {
    if (next && noError()) {
      next += buttonName;
    } else {
      next = buttonName;
    }
  }

  if (operators.includes(buttonName) && noError()) {
    if (total && next && operation) {
      try {
        total = operate(total, next, operation);
        next = null;
        operation = null;
      } catch (err) {
        next = 'Error';
        operation = null;
        total = null;
      }
    } else {
      total = next || total;
    }
    operation = buttonName;
    next = null;
  }

  if (buttonName === '+/-' && noError()) {
    if (next) {
      next = operate(next, -1, '×');
    } else {
      total = operate(total, -1, '×');
    }
  }

  if (buttonName === '%' && noError()) {
    if (next) {
      next = operate(next, 100, '÷');
    } else {
      total = operate(total, 100, '÷');
    }
  }

  return { next, total, operation };
}
