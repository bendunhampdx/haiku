import { Haiku } from './../src/js/haiku.js';
import { Word } from './../src/js/haiku.js';

describe('Haiku', () => {

  test('should correctly recognize the number of vowels in a phrase', () => {
    const haiku = new Haiku("hello there", "hi you", "boo bear");
    expect(haiku.vowelCount()).toEqual(11);
  })

 
})



describe('Word', () => {
  test('should correctly count the vowels in a single word', () => {
    const word = new Word("hello");
    expect(word.wordVowelCount()).toEqual(2)
  })
})