
'use strict'; // enable 'let' declarations

// CONSTANTS

// data-driven for ease of tuning
const PHRASE_ENDING_CHARACTERS = [
  '.',
  '!',
  '?',
  ',',
  ';',
  ':',
  '-',
];

// FUNCTIONS

function splitStringIntoPhrases(description) {
  const endingChars = PHRASE_ENDING_CHARACTERS.join('');
  // match substrings ending in one of the phrase ending chars
  const phraseRegex = new RegExp(`.+?[${endingChars}]`,'g');
  const results = [];

  let matchInfo = [];
  // find all regex matches, and save them
  while ((matchInfo = phraseRegex.exec(str)) !== null) {
    const match = matchInfo[0].trim();
    results.push(match);
  }

  return results;
}

// MAIN

const str = 'To be, or not to be, that is the question. Whether tis nobler! in the mind, to suffer; the slings and arrows! of outrageous fortune? or to take arms - against a sea of troubles, and by opposing? end them:';
const phrases = splitStringIntoPhrases(str);

console.log(`string: '${str}' \n`);
console.log("All matching phrases: ", phrases);