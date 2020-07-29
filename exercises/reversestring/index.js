// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let count = 0;
  let newStr = [];
  while (count < str.length / 2) {
    let back = str[str.length - count - 1];
    let front = str[count];
    newStr[count] = back;
    newStr[str.length - count - 1] = front;
    count++;
  }
  return newStr.join("");
}

// Solution #1
function reverse(str) {
  return str.split("").reverse().join("");
}

// Solution #2
function reverse(str) {
  let reversed = "";
  for (let character of str) {
    // temporary variable -> character
    reversed = character + reversed;
  }
  return reversed;
}

// Solution #3
function reverse(str) {
  return str
    .split("")
    .reduce((reversed, character) => character + reversed, "");
}

module.exports = reverse;
