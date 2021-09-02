import { Haiku } from './../src/js/haiku.js';
import { Word } from './../src/js/haiku.js';

describe('Haiku', () => {

  let haiku = new Haiku("i walk in the park", "the park is very windy", "i lost my old hat");

  test('should count the number of vowels in each sentence', () => {
    expect(haiku.vowelCount()).toEqual([5,7,5]);
  })
  test('should count the number of syllables in each sentence', () => {
    expect(haiku.syllableCount()).toEqual([5,7,5]);
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

  test('should return 1 if a word ends in -vowel-consonant-"e"', () => {
    const word = new Word("abide");
    expect(word.endsWithVCE()).toEqual(1);
  });

  test('should count the amount of syllables in a word', () => {
    const word = new Word('beaches');
    expect(word.syllableWord()).toEqual(2);
  });

  test('it will remove special characters for use in other tests', () => {
    const word = new Word("Ain't");
    expect(word.word).toEqual("Aint");
  })
});