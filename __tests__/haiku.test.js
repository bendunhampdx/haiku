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


  test('it will create an array with the position of the vowels of the word', () => {
    const word = new Word("beaches");
    expect(word.vowelArray()).toEqual([0,1,1,0,0,1,0]);
  });

  test('it will check for words with two or more consecutive vowels and consider that as one syllable', () => {
    const word = new Word('beaches');
    expect(word.multiVowelCount()).toEqual(1)
  });
});