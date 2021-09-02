export class Haiku {
  constructor(sentence1, sentence2, sentence3) {
    this.sentence1 = sentence1;
    this.sentence2 = sentence2;
    this.sentence3 = sentence3;
  }

  checkHaiku() {
    let checkArray = this.syllableCount().join("")
    let correctHaiku = "575"
    if(checkArray === correctHaiku) {
      return "This is a Haiku!";
    } else {
      return "This is not a haiku and the poets of lore are quite mad you even tried!"
    }
  }

  vowelCount() {
    let vowels = ["a", "e", "i", "o", "u", "y"]
    let vowelLineArray = [];
    let sentence1VowelCount = 0;
    let sentence2VowelCount = 0;
    let sentence3VowelCount = 0;
    vowels.forEach(i => {
      this.sentence1.toLowerCase().split("").forEach(j => {
        if (j.includes(i)) {
          sentence1VowelCount++;
        }
      });
      this.sentence2.toLowerCase().split("").forEach(j => {
        if (j.includes(i)) {
          sentence2VowelCount++;
        }
      });
      this.sentence3.toLowerCase().split("").forEach(j => {
        if (j.includes(i)) {
          sentence3VowelCount++
        }
      });
    });
    vowelLineArray.push(sentence1VowelCount,sentence2VowelCount,sentence3VowelCount);
    return vowelLineArray;
  }

  syllableCount() {
    let sentence1SyllableCount = 0;
    let sentence2SyllableCount = 0;
    let sentence3SyllableCount = 0;
    const sentence1Words = this.sentence1.split(" ");
    const sentence2Words = this.sentence2.split(" ");
    const sentence3Words = this.sentence3.split(" ");
    sentence1Words.forEach(i => {
      let word = new Word(i);
      sentence1SyllableCount += word.syllableWord();
    });
    sentence2Words.forEach(i => {
      let word = new Word(i);
      sentence2SyllableCount += word.syllableWord();
    });
    sentence3Words.forEach(i => {
      let word = new Word(i);
      sentence3SyllableCount += word.syllableWord();
    });
     let syllableArray = [sentence1SyllableCount,sentence2SyllableCount,sentence3SyllableCount];
    return syllableArray;
  }
}

export class Word {
  constructor(word) {
    this.word = word.replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-./:;<=>?@[\]^_`{|}~]/,"");
  }

  wordVowelCount() {
    const vowels = ["a", "e", "i", "o", "u", "y"];
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
    const vowelArray = ["a", "e", "i", "o", "u", "y"];
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