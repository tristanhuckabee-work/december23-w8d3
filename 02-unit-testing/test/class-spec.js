const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

let word;
beforeEach(() => {
  word = new Word('hugomungus');
})

describe("Word", function () {
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      expect(word.word).to.exist;
    });
    
    it('should set the "word" property when a new word is created', function () {
      // expect.fail("replace with your code");
      expect(word.word).to.equal('hugomungus');
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      expect(word.removeVowels()).to.equal('hgmngs');
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      expect(word.removeConsonants()).to.equal('uouu');
    });
  });
  
  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      expect(word.pigLatin()).to.equal('ugomungushay')
    });
  });
});
