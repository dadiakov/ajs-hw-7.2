import cleaner from '../app';

test('tel input cleaner', () => {
  expect(cleaner('8 (927) 000-00-00')).toBe('+79270000000');
  expect(cleaner('+7 960 000 00 00')).toBe('+79600000000');
  expect(cleaner('+86 000 000 0000')).toBe('+860000000000');
  expect(cleaner('+8(800) 2000-600 ')).toBe('+78002000600');
});
