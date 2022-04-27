import operator from './../logic/operate'

const passingObject = { total: '1', next: '2', operation: '+' };
test('test operator function for right calculation', () => {
  expect(operator(passingObject.total, passingObject.next, '+')).toBe('3');
  expect(operator(passingObject.total, passingObject.next, '-')).toBe('-1');
  expect(operator(passingObject.total, passingObject.next, 'x')).toBe('2');
  expect(operator(passingObject.total, passingObject.next, "÷")).toBe('0.5');
  expect(operator(passingObject.total, passingObject.next, "%")).toBe('1');
  expect(operator(passingObject.total, 0, "%")).toBe(`Can't find modulo as can't divide by 0.`);
  expect(operator(passingObject.total, 0, "÷")).toBe(`Can't divide by 0.`);
  expect(() => {
    operator(passingObject.total, 0, "unknown")
  }).toThrow();
});