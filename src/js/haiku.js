export default class Haiku {
  constructor(sentence1, sentence2, sentence3) {
    this.sentence1 = sentence1;
    this.sentence2 = sentence2;
    this.sentence3 = sentence3;
  }

  vowelCount() {
    let vowels = ["a", "e", "i", "o", "u"]
    let vowelCount = 0;

    for (let j=0; j < this.sentence1.length; j++) {
      for (let i=0; i < vowels.length; i++) {
        if (this.sentence1[j] === vowels[i]) {
          console.log(this.sentence1[j]);
          vowelCount++;
        }
      }
    }
    return vowelCount;
  }
}


































// Check if a poem is a haiku
  // count syllable
    // recognize vowells & consonants