export class Haiku {
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
}

export class Word {
  constructor(word) {
    this.word = word.replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-./:;<=>?@[\]^_`{|}~]/,"");
  }

  wordVowelCount() {
    const vowels = ["a", "e", "i", "o", "u"];
    const letterArray = this.word.toLowerCase().split("");
    let vowelCount = 0;
    for (let i=0; i < letterArray.length; i++) {
      for (let j=0; j < vowels.length; j++) {
        if (letterArray[i] === vowels[j]) {
          vowelCount++;
        }
      }
    }
    return vowelCount;
  }
  vowelArray() {
    const vowelArray = ["a", "e", "i", "o", "u"];
    const letterArray = this.word.toLowerCase().split("");
    let vowelCheckArray = [];
    let vowelCheck = 0;
    letterArray.forEach(i => {
      vowelArray.forEach(j => {
        if (j.includes(i)) {
          vowelCheck = 1;
        }
      });
      vowelCheckArray.push(vowelCheck);
      vowelCheck = 0;
    });
    return vowelCheckArray;
  }
  multiVowelCount() {
    let vowelPosArray = this.vowelArray();
    let multiVowelCounter = 0;
    let counter = 0;
    vowelPosArray.forEach(i => {
      if (i === 1) {
        counter++;
      } else {
        if (counter !=0) {
          multiVowelCounter = multiVowelCounter + counter -1;
          counter = 0;
        }
      }
    });
    if (counter > 0) {
      multiVowelCounter = multiVowelCounter + counter - 1;
    }
    return multiVowelCounter;
  }  

  endsWithVCE() {
    const letterArray = this.word.toLowerCase().split("");
    if (letterArray.length > 3) {
      if (letterArray[letterArray.length-1] === "e") {
        if (letterArray[letterArray.length-2] === "l") {
          return 0;
        } else {
          return 1;
        }
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  }

  syllableWord() {
    let vowelTotal = this.wordVowelCount();
    let multiVowelTotal = this.multiVowelCount();
    let endsWithVCE = this.endsWithVCE();
    let syllableCount = vowelTotal - multiVowelTotal - endsWithVCE;
    return syllableCount;
  }
}


































// Check if a poem is a haiku
  // count syllable
    // recognize vowells & consonants