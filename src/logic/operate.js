import Big from 'big-js';

const opMap = {
  '+': 'plus',
  '-': 'minus',
  '×': 'times',
  '÷': 'div',
};

export default function operate(numberOne, numberTwo, operation) {
  const n1 = Big(numberOne);
  const n2 = Big(numberTwo);

  const methodName = opMap[operation];

  return n1[methodName](n2).toString();
}
