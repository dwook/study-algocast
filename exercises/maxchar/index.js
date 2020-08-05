// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const count = {};
  for (let character of str) {
    if (count[character]) {
      count[character]++;
    } else {
      count[character] = 1;
    }
  }
  const sorted = Object.entries(count).sort((a, b) => b[1] - a[1])
  return sorted[0][0]
}

// Solution #1
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char
    }
  }

  return maxChar;
}

module.exports = maxChar;
