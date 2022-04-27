import calculate from '../../logic/calculate';

const passingObject = { total: '1', next: '2', operation: '+' };
test('test calculator for the buttons functionality', () => {
  expect(calculate(passingObject, '='))
    .toEqual({ total: '3', next: null, operation: null });
  expect(calculate(passingObject, 'AC'))
    .toEqual({ total: null, next: null, operation: null });
  expect(calculate(passingObject, '+/-'))
    .toEqual({ total: '1', next: '-2', operation: '+' });
});

test('test operators for the right return', () => {
  expect(calculate({ ...passingObject, operation: '+' }, '=').total)
    .toBe('3');
  expect(calculate({ ...passingObject, operation: '-' }, '').total)
    .toBe('-1');
  expect(calculate({ ...passingObject, operation: 'x' }, '=').total)
    .toBe('2');
  expect(calculate({ ...passingObject, operation: '÷' }, '=').total)
    .toBe('0.5');
  expect(calculate({ ...passingObject, operation: '%' }, '=').total)
    .toBe('1');
});

describe('Make multiple calculations', () => {
  let obj = {
    total: null,
    next: null,
    operation: null,
  };

  test('Test multiple operations', () => {
    const buttons = ['2', '+', '2', 'x', '6', '÷', '3', '='];
    buttons.forEach((button) => {
      obj = { ...obj, ...calculate(obj, button) };
    });
    const { total } = obj;
    expect(total).toEqual('8');
  });

  test('Test multiple operations with two digits numbers', () => {
    const buttons = ['2', '0', '+', '1', '0', '÷', '3', '='];
    buttons.forEach((button) => {
      obj = { ...obj, ...calculate(obj, button) };
    });
    const { total } = obj;
    expect(total).toEqual('10');
  });
});
