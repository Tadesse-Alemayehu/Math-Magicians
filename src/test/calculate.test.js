import calculate from './../logic/calculate'

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
  expect(calculate({ ...passingObject, operation: "÷" }, '=').total)
    .toBe('0.5');
});