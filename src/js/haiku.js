export default class Haiku {
  constructor(sentence1, sentence2, sentence3) {
    this.sentence1 = sentence1;
    this.sentence2 = sentence2;
    this.sentence3 = sentence3;
  }

  vowelCount() {
    let vowels = ["a", "e", "i", "o", "u"]
    let vowelCount = 0;
    let text = [this.sentence1.split(""), this.sentence2.split(""), this.sentence3.split("")];
    for (let j=0; j < text.length; j++) {
      for (let k=0; k < text[j].length; k++) {
        for (let i=0; i < vowels.length; i++) {
          if (text[j][k] === vowels[i]) {
            vowelCount++;
          }
        }
      }
    }
    return vowelCount;
  }
  syllableCount() {
    let vCount = this.vowelCount()
    let text = [this.sentence1.split(" "), this.sentence2.split(" "), this.sentence3.split(" ")]
    let sCount = vCount;
    for (let i = 0; i < text.length; i ++) {
      if (text[i].includes("ea")) {
        console.log(text[i]);
        sCount = sCount - 1;
      }
    }
    return sCount;
  }
}


































// Check if a poem is a haiku
  // count syllable
    // recognize vowells & consonants