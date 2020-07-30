// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let strA = stringA.replace(/(\s*)/g, "").toLowerCase().split("");
  let strB = stringB.replace(/(\s*)/g, "").toLowerCase().split("");

  while (strA.length) {
    let char = strA.shift();
    if (strB.includes(char)) {
      let index = strB.indexOf(char);
      strB.splice(index, 1);
    }
  }
  return strA.length === 0 && strB.length === 0  ? true : false;
}

module.exports = anagrams;
