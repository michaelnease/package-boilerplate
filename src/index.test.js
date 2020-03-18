import hello from './index';

test('says hello world', () => {
  expect(hello()).toBe('hello world');
});
