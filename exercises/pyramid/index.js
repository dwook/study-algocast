// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  for (let i = 0; i < n; i++) {
    const hash = new Array(2 * i + 1).fill("#");
    const blank = new Array(n - i - 1).fill(" ");
    const str = [...blank, ...hash, ...blank].join("");
    console.log(str);
  }
}

module.exports = pyramid;
