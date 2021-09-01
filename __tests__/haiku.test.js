import Haiku from './../src/js/haiku.js';

describe('Haiku', () => {

  test('should correctly recognize the number of vowels in a phrase', () => {
    const haiku = new Haiku("hello there", "hi you", "boo bear");
    expect(haiku.vowelCount()).toEqual(11);
  })

  test('should correctly determine the amount of syllables in a phrase', () => {
    const haiku = new Haiku("beaches", "hello", "hi")
    expect(haiku.syllableCount()).toEqual(5)
  })
})
