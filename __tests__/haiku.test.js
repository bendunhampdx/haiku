import Haiku from './../src/js/haiku.js';

describe('Haiku', () => {

  test('should correctly recognize the number of vowels in a block of text', () => {
    const haiku = new Haiku("hello", "sentence2", "sentence3");
    expect(haiku.vowelCount()).toEqual(2);
  })
})
